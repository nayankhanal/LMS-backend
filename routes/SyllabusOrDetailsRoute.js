const express = require("express");
const router = express.Router();
const isAuthenticated = require("../middlewares/isAuthenticated");

const { studySyllabus } = require("../controllers/syllabyusController");
// const getcoursedetails = require("../controllers/courseDetailsController");

router.get("/courses/syllabus/:id", isAuthenticated, studySyllabus);

// syllabusId/:courseDetailsId

// here between "/courses/:syllabusId" and studySyllabus we also need to use
// a middleware to verify if the user is logged in or not
//if he/she is not logged in then they will be redirected to courseDetails page

module.exports = router;
