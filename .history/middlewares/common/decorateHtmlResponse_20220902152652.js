const decirateHtmlResponse = (page_title) => {
  return (req, res, next) => {
    res.locals.html = true;
    res.locals.title = `${page_title} - ${process.env.APP_NAME}`;
    res.locals.loggedInUser = {};
    res.locals.erro;
    next();
  };
};
module.exports = decirateHtmlResponse;
