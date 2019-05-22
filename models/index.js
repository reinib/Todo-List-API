const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

// mongoose = require("mongoose");
mongoose.set("debug", true);

var db = require("../config/keys").mongoURI;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(function() {
    console.log("Connected to DB!");
  })
  .catch(function(err) {
    console.log("ERROR:", err.message);
  });

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");
