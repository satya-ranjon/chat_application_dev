//? External import
const express = require("express");

//? Internal import
const { getLogin, login } = require("../controller/loginController");
const decirateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

const router = express.Router();

//> login page
router.get("/", decirateHtmlResponse("Login"), getLogin);

module.exports = router;
