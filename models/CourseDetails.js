const { Sequilize, DataTypes } = require("sequelize");
const sequelize = require("../cofig/database");

const CourseDetails = sequelize.define("coursedetails", {
  topic: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = CourseDetails;
