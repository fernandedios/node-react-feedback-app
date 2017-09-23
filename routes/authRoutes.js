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
  app.get('/auth/google/callback', passport.authenticate('google'));
};
