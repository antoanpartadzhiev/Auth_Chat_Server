if (process.env.NODE_ENV !== 'production') {
  // Configure with .env file for every env diff. then prod.
  require('dotenv').config();
} else {
  // Use config file
  require('./config/config');
}

console.log('SERVER ENV:',process.env.NODE_ENV);
console.log('MONGODB URI:', process.env.MONGODB_URI);

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true});

var app = express();
const port = process.env.PORT ? Number(process.env.PORT) : 4000;

app.use(bodyParser.json());
app.use(express.static('public'));

require('./Routes/users')(app);


app.listen(port, () => {
    console.log(`LISTENING ON PORT: ${port}`);
});

module.exports = {app};
