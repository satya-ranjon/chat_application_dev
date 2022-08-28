//? External import
const express = require("express");

//? Internal import
const { getLogin } = require("../controller/loginController");
const decirateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const router = express.Router();

//> login page
router.get("/", getLogin);

module.exports = router;
