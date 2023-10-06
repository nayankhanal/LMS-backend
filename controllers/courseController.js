const Courses = require("../models/Courses");

const allCourses = async (req, res) => {
  const courses = await Courses.findAll();
  res.send(courses);
};

module.exports = { allCourses };
