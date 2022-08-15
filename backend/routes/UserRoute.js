const express = require("express");
const { createUser } = require("../controller/UserController");
const route = express.Router();

route.route("/registration").post(createUser);

module.exports = route;