const uploader = require("../../utilities/singleUpload");

const avatarUpload = (req, res, next) => {
  console.log("avatarUpload");
  const upload = uploader(
    "avatars",
    ["image/jpeg", "image/jpg", "image/png"],
    1000000,
    "Only .jpg, jpeg or .png format allowed"
  );

  //! call the middleware function
  upload.any()(req, res, (err) => {
    if (err) {
      res.status(500).send({
        errors: {
          avatar: {
            msg: err.message,
          },
        },
      });
    } else {
      next();
    }
  });
};

module.exports = avatarUpload;
