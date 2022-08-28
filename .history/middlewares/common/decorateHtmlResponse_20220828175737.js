const decirateHtmlResponse = () => {
  return (req, res, next) => {
    res.locals.html = true;
  };
};
module.exports = decirateHtmlResponse;
