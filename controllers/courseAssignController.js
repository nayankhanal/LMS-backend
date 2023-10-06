// const isAuthenticated = require("../middlewares/isAuthenticated");
const { Users_Courses } = require("../models/Users");

const CourseAssign = (req, res) => {
  const { courseId } = req.params;
  const userId = req.data.id;
  // console.log(courseId);
  // console.log(userId);
  Users_Courses.create({ userId, courseId })
    .then(() => {
      console.log("Course assigned successfully");
      res.send({
        message: true,
        response: "Course assigned successfully",
      });
    })
    .catch((err) => {
      res.send({
        message: false,
        response: err,
      });
    });
};

module.exports = CourseAssign;
