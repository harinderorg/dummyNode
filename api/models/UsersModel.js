"use strict";

var mongoose = require("mongoose");

///start owner schema
var UserSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
