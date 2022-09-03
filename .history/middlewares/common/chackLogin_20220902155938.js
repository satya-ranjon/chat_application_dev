// extarnal import
const jwt = require("jsonwebtoken");

const chackLogin = (req, res, next) => {
  let cookies =
    Object.keys(req.signedCookies).length > 0 ? req.signedCookies : null;

  if (cookies) {
    try {
      token = cookies[process.env.COOKIE_NAME];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;

      // pass user info to response locals
      if (res.local.html) {
        res.locals.loggedInUser = decoded;
      }
      next();
    } catch (error) {}
  } else {
  }
};
