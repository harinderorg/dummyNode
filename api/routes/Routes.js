"use strict";
module.exports = function (app) {
  var users = require("../controllers/UsersCtrl");
  app.route("/signup").post(users.signup);
};
