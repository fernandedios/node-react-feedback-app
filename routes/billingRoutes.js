const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey); // pass secret key

const requireLogin = require('../middlewares/requireLogin');

// use requireLogin to check if user is authenticated
module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    // console.log(req.body);

    const charge = await stripe.charges.create({
      amount: 500, // $5 in cents
      currency: 'usd',
      description: '$5 for 5 survey credits',
      source: req.body.id // id response from stripe
    });

    // passport by default stores user model inside req.user
    req.user.credits += 5; // add 5 credits
    const user = await req.user.save(); // save user

    res.send(user);
  });
};
