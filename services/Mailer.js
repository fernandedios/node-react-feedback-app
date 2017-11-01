const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

class Mailer extends helper.Mail {
  constructor({ subject, recipients }, content) {
    super();

    this.sgApi = sendgrid(keys.sendGridKey);

    this.from_email = new helper.Email('no-reply@surveyly.com'); // define from_email
    this.subject = subject;
    this.body = new helper.Content('text/html', content); // define content type, then content
    this.recipients = this.formatAddresses(recipients); // extract emails from subdocument

    this.addContent(this.body); // register this.body as actual email content
    this.addClickTracking(); // enable sendgrid click tracking
    this.addRecipients(); // register recipients to actual email
  }

  formatAddresses(recipients) {
    return recipients.map(({ email }) => { // wrap in parens to make destructuring work
      return new helper.Email(email); // format with email helper
    });
  }

  addClickTracking() {
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);

    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  }

  addRecipients() {
    const personalize = new helper.Personalization();
    this.recipients.forEach(recipient => {
      personalize.addTo(recipient);
    });

    this.addPersonalization(personalize);
  }

  // async await send
  async send() {
    const request = this.sgApi.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: this.toJSON() // convert to JSON data
    });

    const response = await this.sgApi.API(request); // send to sendgrid
    return response;
  }
}

module.exports = Mailer;
