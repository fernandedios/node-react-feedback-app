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
  // route handler for survey response landing page
  app.get('/api/surveys/thanks', (req, res) => {
    res.send('Thanks for voting!');
  });

  // route handler for sendgrid webhook
  app.post('/api/surveys/webhook', (req, res) => {
    // console.log(req.body);
    const p = new Path('/api/surveys/:surveyId/:choice') // set pattern for extracting surveyId and choice

    const events = _chain(req.body) // start lodash chain
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
      .value(); // get final value of chain

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
