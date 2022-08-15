const express = require("express");
const { createUser, loginUser, logoutUser, forgotPassword, resetPassword, userDetails } = require("../controller/UserController");
const { isAuthenticatedUser } = require("../middleware/auth");
const route = express.Router();

route.route("/registration").post(createUser);

route.route("/login").post(loginUser);

route.route("/logout").get(logoutUser);

route.route("/password/forgot").post(forgotPassword);

route.route("/password/reset/:token").put(resetPassword);

route.route("/me").get(isAuthenticatedUser, userDetails);

module.exports = route;