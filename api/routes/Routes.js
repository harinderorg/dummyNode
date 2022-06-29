"use strict";
module.exports = function (app) {
  var users = require("../controllers/UsersCtrl");
  app.route("/signup").get(users.signup);
};
