const passport = require('passport');

// export as function with app as argument
module.exports = (app) => {
  // request for authentication from google
  app.get('/auth/google',
  	passport.authenticate('google', {
  		scope: ['profile', 'email'] // specify what to get from google user account
  	})
  );

  // hanlde callback using passport
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),

    // send user to dashboard after logging in
    (req, res) => {
      res.redirect('/surveys');
    }
  );

  // logout user
  app.get('/api/logout', (req, res) => {
    req.logout(); // attached automatically by passport, kill cookie

    // send user to landing page
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    // res.send(req.session); // returns { passport: user._id } as session
    res.send(req.user);
  });
};
