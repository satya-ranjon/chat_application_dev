const createError = require("http-errors");

//!404 not found handler
function notFoundHandler(req, res, next) {
  next(createError(404, "Your requested content was not found!"));
}

//! default not found handler
function notFoundHandler(err, req, res, next) {
  next(createError(404, "Your requested content was not found!"));
}
