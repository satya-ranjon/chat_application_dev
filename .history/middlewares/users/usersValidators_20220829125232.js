//? external import
const { check } = require("express-validator");
const createError = require("http-errors");

//? Internal import
const User = require("../../modules/People");

//? add user
const addUserValidators = [
  check("name")
    .isLength({ min: 1 })
    .withMessage("Name is required")
    .isAlpha("en-US", { ignore: " -" })
    .withMessage("Name must not contain anything other than alphabet")
    .trim(),
  check("email")
    .isEmail()
    .withMessage("Invalid email address")
    .trim()
    .custom(async (value) => {
      try {
        const user = await User.findOne({ email: value });
        if (user) {
          throw createError("Email alrady is use!");
        }
      } catch (err) {
        throw createError(err.message);
      }
    }),
];
