const express = require('express');
const mongoose = require('mongoose');

const keys = require('./config/keys');
require('./models/user'); // run this first before the passport file
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();
const PORT = process.env.PORT || 5000;

require('./routes/authRoutes')(app); // immediately call function, attach app

app.listen(PORT, () => {
	console.log(`Server started at port ${PORT}`);
});
