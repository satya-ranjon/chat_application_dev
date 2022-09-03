// extarnal import
const jwt = require("jsonwebtoken");

const chackLogin = (req, res, next) => {
  let cookies =
    Object.keys(req.signedCookies).length > 0 ? req.signedCookies : null;
};
