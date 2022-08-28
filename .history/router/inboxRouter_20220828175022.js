//? External import
const express = require("express");

//? Internal import
const { getInbox } = require("../controller/inboxController");

const router = express.Router();

//> login page
router.get("/", getInbox);

module.exports = router;
