const express = require("express");
const router = express.Router();

const CourseAssign = require("../controllers/courseAssignController");
const isAuthenticated = require("../middlewares/isAuthenticated");

router.post("/courses/assign/:courseId", isAuthenticated, CourseAssign);

module.exports = router;
