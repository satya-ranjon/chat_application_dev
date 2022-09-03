// Internal import
const User = require("../modules/People");

const getLogin = (req, res, next) => {
  res.render("index");
};

async function login(req, res, next) {
  try {
    // find a user who has this email/username

    const user = await User.findOne({});
  } catch (err) {}
}

module.exports = { getLogin };
