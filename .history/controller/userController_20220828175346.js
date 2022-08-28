const getUser = (req, res, next) => {
  res.render("users", {
    title: "Users - chat Application",
  });
};

module.exports = { getUser };
