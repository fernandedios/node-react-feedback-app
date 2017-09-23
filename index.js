const express = require('express');

require('./services/passport');

const app = express();
const PORT = process.env.PORT || 5000;

require('./routes/authRoutes')(app); // immediately call function, attach app

app.listen(PORT, () => {
	console.log(`Server started at port ${PORT}`);
});
