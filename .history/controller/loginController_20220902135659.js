const getLogin = (req, res, next) => {
  res.render("index");
};

async function login(req, res, next) {
  try {
    // find a user who has this email/username

    const user = await User;
  } catch (err) {}
}

module.exports = { getLogin };
