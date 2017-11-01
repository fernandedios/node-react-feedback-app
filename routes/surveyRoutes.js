const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys'); // get model directly from mongoose

module.exports = app => {
  // check if user is authenticated, check if user has enough credits
  // take special care of the middleware order
  app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
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
    mailer.send(); // send email
  });
};
