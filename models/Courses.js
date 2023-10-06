const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../cofig/database");

const Syllabus = require("./Syllabus");
const CourseDetails = require("./CourseDetails");

const Courses = sequelize.define("courses", {
  course_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Courses.hasMany(Syllabus);
Syllabus.belongsTo(Courses);

Courses.hasOne(CourseDetails);
CourseDetails.belongsTo(Courses);

module.exports = Courses;
