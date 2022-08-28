const getUser = (req, res, next) => {
  res.render("index", {
    title: "Login - chat Application",
  });
};

module.exports = { getUser };
