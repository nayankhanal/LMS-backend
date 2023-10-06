const { Users_Courses } = require("../models/Users");
const Courses = require("../models/Courses");

const getLearnings = async (req, res) => {
  //here loggedinId is imaginary name. Here we receive the user's id who is logged in
  //right now(may be from local storage or cookies)
  const loggedinId = req.data.id;

  const allCourseIds = [];

  const isAssignedCourses = await Users_Courses.findAll({
    where: { userId: loggedinId },
  });
  console.log(isAssignedCourses);
  if (isAssignedCourses.length) {
    isAssignedCourses.forEach((element) => {
      allCourseIds.push(element.courseId);
    });
    const assignedCourses = await Courses.findAll({ id: allCourseIds });
    res.send({ message: true, data: assignedCourses });
  } else {
    res.redirect("/courses");
  }
};

module.exports = getLearnings;
