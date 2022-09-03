//? External import
const express = require("express");

//? Internal import
const { getLogin, login } = require("../controller/loginController").default;
const decirateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {
  doLoginValidators,
  doLoginValidationHandler,
} = require("../middlewares/login/loginValidators");

const router = express.Router();

//? page title
const page_tile = "Login";

//> login page
router.get("/", decirateHtmlResponse("Login"), getLogin);

// router.post(
//   "/",
//   decirateHtmlResponse(page_tile),
//   doLoginValidators,
//   doLoginValidationHandler,
//   login
// );

// export
module.exports = router;
