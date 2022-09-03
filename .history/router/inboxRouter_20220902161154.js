//? External import
const express = require("express");

//? Internal import
const { getInbox } = require("../controller/inboxController");
const decirateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const { checkLogin } = require("../middlewares/common/chackLogin");
const router = express.Router();

//> login page
router.get("/", decirateHtmlResponse("Inbox"), checkLogin, getInbox);

module.exports = router;
