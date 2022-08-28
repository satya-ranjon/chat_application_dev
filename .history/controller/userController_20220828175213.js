const getUser = (req, res, next) => {
  res.render("users", {
    title: "Login - chat Application",
  });
};

module.exports = { getUsers };
