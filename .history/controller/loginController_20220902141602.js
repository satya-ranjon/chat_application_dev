// External import
const bcrypt = require("bcrypt");
const jwt = require("");

// Internal import
const User = require("../modules/People");

const getLogin = (req, res, next) => {
  res.render("index");
};

async function login(req, res, next) {
  try {
    // find a user who has this email/username

    const user = await User.findOne({
      $or: [{ email: req.body.username }, { mobile: req.body.username }],
    });

    if (user && user._id) {
      const isValidPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (isValidPassword) {
        // prepare the user object to generate token
        const userObject = {
          username: user.name,
          mobile: user.mobile,
          email: user.email,
          role: "user",
        };
      } else {
      }
    } else {
    }
  } catch (err) {}
}

module.exports = { getLogin };
