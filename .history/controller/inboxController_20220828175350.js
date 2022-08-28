const getInbox = (req, res, next) => {
  res.render("inbox", {
    title: "Inbox - chat Application",
  });
};

module.exports = { getInbox };
