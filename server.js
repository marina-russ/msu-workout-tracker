const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const host = process.env.HOST;

const app = express();
const db = require('./models')

// App.USE()
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// mongoose connect
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// routes
require('./routes/api.js')(app);
require('./routes/html-routes.js')(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

module.exports = app;