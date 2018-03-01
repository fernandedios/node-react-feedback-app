node-react-feedback-app
=========

> NodeJs Express, ReactJs, Stripe, SendGrid, Stripe, Google Authentication

A email survey application built with NodeJs Express and ReactJs

Getting Started
------------

Checkout this repo, install dependencies, configure, then start the app.

```bash
$ git clone git@github.com:fernandedios/node-react-feedback-app.git
$ cd node-react-feedback-app
$ npm install

-- configure app

$ npm start
```

Configuration
------------

This web application requires the following as starting point:
- Local or Online hosted MongoDB
- [Google OAuth]
- [SendGrid Account]
- [Stripe Account]

### Local Development Variables
```js
module.exports = {
	googleCLientID: 'your_google_client_id',
	googleCLientSecret: 'your_google_client_secret',
	mongoURI: 'mongodb://your_mongodb_development_url',
	cookieKey: 'your_cookie_key',
	stripePublishableKey: 'your_stripe_publishable_key',
	stripeSecretKey: 'your_stripe_secret_key',
	sendGridKey: 'your_sendgrid_api_key',
	redirectDomain: 'http://localhost:3000'
};
```

cookieKey is a random string used for encryption.
redirectDomain is your local development server url
Save as 'dev.js' and place it inside the config folder.

```js
REACT_APP_STRIPE_KEY=your_stripe_publishable_key
```

Save as '.env.development' and place it inside the client folder.


### Production Environment Variables
You will need to add the following environment variables to your production host

```js
GOOGLE_CLIENT_ID,
GOOGLE_CLIENT_SECRET,
MONGO_URI,
COOKIE_KEY,
STRIPE_PUBLISHABLE_KEY,
STRIPE_SECRET_KEY,
SEND_GRID_KEY,
REDIRECT_DOMAIN
```

COOKIE_KEY is a random string used for encryption.
REDIRECT_DOMAIN is your production server url


Thanks
------

node-react-feedback-app* © 2018, Fernan de Dios. Released under the [MIT License].<br>

> [fernandedios.com](http://fernandedios.com) &nbsp;&middot;&nbsp;
> GitHub [@fernandedios](https://github.com/fernandedios) &nbsp;&middot;&nbsp;
> Twitter [@fernan_de_dios](https://twitter.com/fernan_de_dios)

[MIT License]: http://mit-license.org/
[Google OAuth]: https://console.developers.google.com/apis/library
[SendGrid Account]: https://sendgrid.com/
[Stripe Account]: https://stripe.com/
