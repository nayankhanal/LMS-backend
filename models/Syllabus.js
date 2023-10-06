const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../cofig/database");

const Syllabus = sequelize.define("coursestudies", {
  unit: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Syllabus;
