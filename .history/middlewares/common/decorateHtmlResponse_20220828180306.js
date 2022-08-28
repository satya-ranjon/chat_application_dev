const decirateHtmlResponse = (page_title) => {
  return (req, res, next) => {
    res.locals.html = true;
    res.title.html = `${page_title} - ${process.env.APP_NAME}`;
    next();
  };
};
module.exports = decirateHtmlResponse;
