const express = require("express");
const app = express();
const mongoose = require("mongoose");
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const uri = process.env.DATABASE_CONNECTION_URL;
const connection = mongoose
  .connect(uri, connectionParams)
  .then(() => {
    console.log("connection succeed");
  })
  .catch(console.log);

module.exports = mongoose.connection;
