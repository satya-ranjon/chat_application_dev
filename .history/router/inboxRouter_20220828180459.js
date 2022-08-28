//? External import
const express = require("express");

//? Internal import
const { getInbox } = require("../controller/inboxController");
const decirateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

const router = express.Router();

//> login page
router.get("/", decirateHtmlResponse("Inbox"), getInbox);

module.exports = router;
