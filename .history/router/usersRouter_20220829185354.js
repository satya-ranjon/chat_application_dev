//? External import
const express = require("express");

//? Internal import
const { getUser } = require("../controller/userController");
const decirateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const avatarUpload = require("../middlewares/users/avatarUpload");
const { addUserValidators } = require("../middlewares/users/usersValidators");

const router = express.Router();

//> login page
router.get("/", decirateHtmlResponse("Users"), getUser);

router.post("/", avatarUpload, addUserValidators, addUserValidationHandler);

module.exports = router;
