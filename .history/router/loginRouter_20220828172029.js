//? External import
const express = require("express");

//? Internal import
const getLogin = require("../controller/loginController");

const router = express.Router();

//> login page
router.get("/", getLogin);

module.exports = router;
