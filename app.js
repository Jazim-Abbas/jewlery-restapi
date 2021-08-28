const express = require("express");
require("express-async-errors");
const cors = require("cors");

// local imports
const allRoutes = require("./src/routes");
const catchUnhandleExceptions = require("./src/middlewares/exception-handling");

const app = express();
app.use(express.static(__dirname + "/uploads"));
app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", allRoutes);

// this should be always the last middleware. otherwise it will not work properly
// best practise don't modify this middleware
app.use(catchUnhandleExceptions);

module.exports = app;
