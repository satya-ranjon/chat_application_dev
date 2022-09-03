const multer = require("multer");
const path = require("path");

function uploader(subfoler_path, allowed_file_types, max_file_size, error_msg) {
  //? make upload object
  const UPLOADS_FOLDER = `${__dirname}/../public/uploads/${subfoler_path}/`;
  //? defiine the  storage
  const storage = multer.diskStorage({
    distination: (req, file, cb) => {
      cb(null, UPLOADS_FOLDER);
    },
    filename: (req, file, cb) => {
      const fileExt = path.extname(file.originalname);
      const fileName = file.originalname.replace(fileExt, "");
    },
  });
  return upload;
}

module.exports = uploader;
