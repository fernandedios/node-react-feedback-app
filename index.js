const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

const keys = require('./config/keys');
const PORT = process.env.PORT || 5000;

require('./models/user'); // run this first before the passport file
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

// use cookies via middleware
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000, // cookie expiration, 30 days in millisecs
		keys: [ keys.cookieKey ] // key encryption
	})
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app); // immediately call function, attach app

app.listen(PORT, () => {
	console.log(`Server started at port ${PORT}`);
});
