const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey); // pass secret key

module.exports = app => {
  app.post('/api/stripe', async (req, res) => {
    // console.log(req.body);

    const charge = await stripe.charges.create({
      amount: 500, // $5 in cents
      currency: 'usd',
      description: '$5 for 5 survey credits',
      source: req.body.id // id response from stripe
    });

    // console.log(charge);
  });
};
