const Syllabus = require("../../models/Syllabus");
const CourseDetails = require("../../models/CourseDetails");
const Courses = require("../../models/Courses");

const createStudySyllabus = (req, res) => {
  // const { unit, content, courseId } = req.body;
  const syllabusArray = req.body;

  try {
    syllabusArray.forEach((syllabusData) => {
      const { unit, content, courseId } = syllabusData;
      Syllabus.create({ unit, content, courseId });
    });
    res.send({ response: "Successfully created syllabus" });
  } catch (error) {
    console.log("Unable to post course syllabus: ", err);
    res.send({ response: "Unable to post course syllabus: ", err });
  }
};

const createCourseDetails = (req, res) => {
  const { topic, description, courseId } = req.body;
  CourseDetails.create({ topic, description, courseId })
    .then(() => {
      console.log("Course details created successfully");
      res.send({ response: "Course name created successfully" });
    })
    .catch((err) => {
      console.log("Unable to post course details: ", err);
      res.send({ response: "Unable to post course details: ", err });
    });
};

const createCourse = (req, res) => {
  const { course_name } = req.body;
  Courses.create({
    course_name: course_name,
  })
    .then(() => {
      console.log("Course name created successfully");
      res.send({ response: "Course name created successfully" });
    })
    .catch((err) => {
      console.log("Unable to post course name: ", err);
      res.send({ response: "Unable to post course name: ", err });
    });
};

module.exports = { createStudySyllabus, createCourseDetails, createCourse };
