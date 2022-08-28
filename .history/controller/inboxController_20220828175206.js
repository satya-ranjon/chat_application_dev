const getInbox = (req, res, next) => {
  res.render("inbox", {
    title: "Login - chat Application",
  });
};

module.exports = { getInbox };
