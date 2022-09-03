//? External import
const express = require("express");

//? Internal import
const { getLogin, login } = require("../controller/loginController");
const decirateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {
  doLoginValidators,
  doLoginValidationHandler,
} = require("../middlewares/login/loginValidators");

const router = express.Router();

//> login page
router.get("/", decirateHtmlResponse("Login"), getLogin);

router.post(
  "/",
  decirateHtmlResponse("Login"),
  doLoginValidators,
  doLoginValidationHandler,
  login
);

// export
module.exports = router;
