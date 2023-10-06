const express = require("express");
const router = express.Router();

const { allCourses } = require("../controllers/courseController");

router.get("/courses", allCourses);

module.exports = router;
