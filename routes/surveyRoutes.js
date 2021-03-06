const _ = require('lodash');
const Path = require('path-parser');
const { URL } = require('url'); // builtin node module
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys'); // get model directly from mongoose

module.exports = app => {
  // get list of surveys of the current user
  app.get('/api/surveys', requireLogin, async (req, res) => {
    // current logged-in user is stored as req.user
    const surveys = await Survey.find({ _user: req.user.id })
      .select({ recipients: false }); // exclude recipients subdocuments in the response

    res.send(surveys);
  });

  // route handler for survey response landing page
  app.get('/api/surveys/:surveyId/:choice', (req, res) => {
    res.send('Thanks for voting!');
  });

  // route handler for sendgrid webhook
  app.post('/api/surveys/webhook', (req, res) => {
    // console.log(req.body);
    const p = new Path('/api/surveys/:surveyId/:choice') // set pattern for extracting surveyId and choice

    _.chain(req.body) // start lodash chain
      .map(({ email, url }) => {
        // extract route, no domain using URL
        const match = p.test(new URL(url).pathname); // will return null if surveyId and choice could not be extracted

        if (match) {
          const { surveyId, choice } = match;
          return { email, surveyId, choice };
        }
      })
      .compact() // remove any undefined elements
      .uniqBy('email', 'surveyId') // remove duplicate elements based on email and surveyId properties
      .each(({ email, surveyId, choice }) => { // iterate thru each elemt in the array
        Survey.updateOne({
          _id: surveyId,
          recipients: {
            $elemMatch: { email, responded: false } // recipients record should match email and responded = false
          }
        },
        {
          $inc: { [choice]: 1 }, // use interpollation to set object prop to 'yes' or 'no'. increment by 1
          $set: { 'recipients.$.responded': true }, // look at recipients subdoc, update element returned by $elemMatch, set responded = true
          lastResponded: new Date()

        }).exec(); // execute query to db
      })
      .value(); // get final value of chain

    res.send({}); // send empty response to sendgrid

  });

  // check if user is authenticated, check if user has enough credits
  // take special care of the middleware order
  // async await operation
  // TODO: Make user provide a custom thank you url
  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,

      // wrap object with parens to avoid errors, trim whitespaces on email
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),

      _user: req.user.id,
      dateSent: Date.now()
    });

    const mailer = new Mailer(survey, surveyTemplate(survey));

    try {
      await mailer.send(); // send email
      await survey.save(); // save survey to db

      req.user.credits -= 1; // deduct credit
      const user = await req.user.save(); // save user

      res.send(user); // send updated user model as response
    }
    catch (err) {
      res.status(422).send(err);  // send unprocessable entity status code
    }
  });
};
