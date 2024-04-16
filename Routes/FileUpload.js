const express = require("express");
const router = express.Router();

const {
  localFileUpload,
  imageUpload,
  vedioUploader,
  imageSizeReducer,
} = require("../Controllers/FileUpload");

router.post("/localFileUpload", localFileUpload);
router.post("/imageUpload", imageUpload);
router.post("/vedioUpload", vedioUploader);
router.post("/imageReduceUpload", imageSizeReducer);

module.exports = router;
