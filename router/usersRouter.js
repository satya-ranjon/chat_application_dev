//? External import
const express = require("express");

//? Internal import
const { getUser } = require("../controller/userController");
const decirateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

const router = express.Router();

//> login page
router.get("/", decirateHtmlResponse("Users"), getUser);

module.exports = router;
