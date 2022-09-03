//? External import
const express = require("express");

//? Internal import
const {
  getUser,
  addUser,
  removeUser,
} = require("../controller/userController");
const decirateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const avatarUpload = require("../middlewares/users/avatarUpload");
const {
  addUserValidators,
  addUserValidationHandler,
} = require("../middlewares/users/usersValidators");

const router = express.Router();

//> login page
router.get("/", decirateHtmlResponse("Users"), getUser);

//> add user
router.post(
  "/",
  avatarUpload,
  addUserValidators,
  addUserValidationHandler,
  addUser
);

//> remove user
router.delete("/:id", removeUser);

module.exports = router;
