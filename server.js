// Dependencies:
const express = require('express');

// Express:
const app = express();

// Port details: (Use whatever port heroku designates otherwise use port 8080.)
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Router:
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// Listener:
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});