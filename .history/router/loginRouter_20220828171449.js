//? External import
const express = require("express");

//? Internal import
const loginController = require("../controller/loginController");

const router = express.Router();

//> login page
router.get("/", loginController);

module.exports = router;
