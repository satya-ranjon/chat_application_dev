//? External import
const express = require("express");
const { check } = require("express-validator");

//? Internal import
const { getUser } = require("../controller/userController");
const decirateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const avatarUpload = require("../middlewares/users/avatarUpload");

const router = express.Router();

//> login page
router.get("/", decirateHtmlResponse("Users"), getUser);

router.post("/", avatarUpload, [check("name"), check("email")]);

module.exports = router;
