"use strict";

var mongoose = require("mongoose"),
  User = mongoose.model("User");

exports.signup = (req, res) => {
  var new_user = new User(res.body);
  new_user.save(function (err, user) {
    res.send({ status: 1 });
  });
};
