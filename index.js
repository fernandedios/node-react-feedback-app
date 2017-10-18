const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

const keys = require('./config/keys');
const PORT = process.env.PORT || 5000;

require('./models/user'); // run this first before the passport file
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

// use body-parser middleware
// since express does NOT parse incoming request bodies automatically
app.use(bodyParser.json());

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
require('./routes/billingRoutes')(app);

// necessary since there is NO create-react-app client server in production
if (process.env.NODE_ENV === 'production') {
	// Make express serve up production assets
	app.use(express.static('client/build'));

	// Express will serve up react client index.html
	// if route is unrecognized
	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	})
}

app.listen(PORT, () => {
	console.log(`Server started at port ${PORT}`);
});
