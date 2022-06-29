"use strict";

var mongoose = require("mongoose"),
  User = mongoose.model("User");

Export.signup = (req, res) => {
  res.send({ status: 1 });
};
