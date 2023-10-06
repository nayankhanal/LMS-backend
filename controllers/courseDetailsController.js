const CourseDetails = require("../models/CourseDetails");

const getcoursedetails = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const details = await CourseDetails.findOne({ where: { courseId: id } });
    console.log(details);
    res.send(details);
  } catch (error) {
    console.log(error, "====error");
  }
};

module.exports = { getcoursedetails };
