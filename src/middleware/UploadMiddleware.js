const multer = require("multer");
const path = require('path');
const maxSize = 2 * 1024 * 1024;

const fileFilter = (req, file, cb) => {
  console.log(file.mimetype);
  if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let storage = multer.diskStorage({
                                   destination: (req, file, cb) => {
                                     cb(null, 'public/uploads');
                                   },
                                   filename: (req, file, cb) => {
                                     console.log(file.originalname);
                                     cb(null, `${Date.now()}-covid19Tracker-${file.originalname}`);
                                   },
                                 });
let uploadMiddleware = multer({
                          storage: storage,
                          limits: { fileSize: maxSize },
                          fileFilter: fileFilter,
                        });

module.exports = uploadMiddleware;
