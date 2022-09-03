const avatarUpload = (req, res, next) => {
  const upload = uploader("avatars", ["image/jpeg", "image/jpg", "image/png"]);
};

module.exports = avatarUpload;
