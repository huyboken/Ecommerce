const express = require("express");
const app = express();

app.use(express.json());

//route imports
const product = require("./routes/ProductRoute");
const ErrorHandler = require("./middleware/error");

app.use("/api/v2", product);

app.use(ErrorHandler);

module.exports = app;