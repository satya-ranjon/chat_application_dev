const uploader = require("../../utilities/singleUpload");

const avatarUpload = (req, res, next) => {
  const upload = uploader(
    "avatars",
    ["image/jpeg", "image/jpg", "image/png"],
    1000000,
    "Only .jpg, jpeg or .png format allowed"
  );
  //! call the middleware function
  upload.any()(req, res, (err) => {
    if (err) {
      res.status(500).join({
        err,
      });
    }
  });
};

module.exports = avatarUpload;
