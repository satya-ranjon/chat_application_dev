//? External import
const express = require("express");

//? Internal import
const { getLogin, login, logout } = require("../controller/loginController");
const {
  checkLogin,
  redirectLoggedIn,
} = require("../middlewares/common/chackLogin");
const decirateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {
  doLoginValidators,
  doLoginValidationHandler,
} = require("../middlewares/login/loginValidators");

const router = express.Router();

//? page title
const page_tile = "Login";

//> login page
router.get(
  "/",
  decirateHtmlResponse("Login"),
  checkLogin,

  getLogin
);

router.post(
  "/",
  decirateHtmlResponse(page_tile),
  doLoginValidators,
  doLoginValidationHandler,
  login
);

// logout
router.delete("/", logout);

// export
module.exports = router;
