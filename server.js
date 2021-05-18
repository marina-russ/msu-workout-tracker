const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;
const host = process.env.HOST;

// App.USE()
// TODO:

// mongoose connect
// TODO: 

// routes
require("./routes/api.js")(app);
require("./routes/html-routes.js")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

module.exports = app;