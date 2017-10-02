const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users'); // pull out user model class from mongoose

// define serializeUser
passport.serializeUser((user, done) => {
	done(null, user.id); // call done callback, pass error as null, return user.id
});

// define deserializeUser
passport.deserializeUser((id, done) => {
	User.findById(id)
		.then((user) => {
			done(null, user); // call done callback, pass error as null, return user
		})
		.catch((err) => done(err, null));
});

// make passport to use GoogleStrategy
passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleCLientID,
			clientSecret: keys.googleCLientSecret,
			proxy: true, // retain https when going through a proxy
			callbackURL: '/auth/google/callback' // redirect to this url after authentication from google
		},

		// callback when accessToken is received from google
		(accessToken, refreshToken, profile, done) => {
			// console.log('access token', accessToken);
			// console.log('refresh token', refreshToken);
			// console.log('profile', profile);

			// check if user exists
			User.findOne({ googleId: profile.id })
				.then((existingUser) => {
					if (existingUser) {
						done(null, existingUser); // call done callback, pass error as null, return existingUser
					}
					else {
						new User({ googleId: profile.id })
							.save() // save model instance to mongodb
							.then(user => done(null, user));  // call done callback, pass error as null, return user from db
					}
				})
				.catch((err) => done(err, null));
		}
	)
);
