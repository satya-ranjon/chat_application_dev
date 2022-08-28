//? External import
const express = require("express");

//? Internal import
const { getUser } = require("../controller/userController");

const router = express.Router();

//> login page
router.get("/", getUser);

module.exports = router;
