// extarnal import
const jwt = require("jsonwebtoken");

const chackLogin = (req, res, next) => {
  let cookies =
    Object.keys(req.signedCookies).length > 0 ? req.signedCookies : null;

  if (cookies) {
    try {
      token = cookies[process.env.COOKIE_NAME];
    } catch (error) {}
  } else {
  }
};
