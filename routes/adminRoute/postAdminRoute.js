const express = require("express");
const router = express.Router();

const {
  createCourse,
  createCourseDetails,
  createStudySyllabus,
} = require("../../controllers/adminController/postAdminController");

router.post("/admin/courses/syllabus", createStudySyllabus);
router.post("/admin/courses/details", createCourseDetails);
router.post("/admin/courses", createCourse);

module.exports = router;
