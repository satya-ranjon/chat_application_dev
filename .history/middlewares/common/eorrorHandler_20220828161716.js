const createError = require("http-errors");

//!404 not found handler
function notFoundHandler(req, res, next) {
next(createError(404,"Your requested content was not found!"))
}
