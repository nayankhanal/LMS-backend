const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../cofig/database");

const Courses = require("./Courses");

const Users = sequelize.define("users", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Users.belongsToMany(Courses, { through: "Users_Courses" });
Courses.belongsToMany(Users, { through: "Users_Courses" });

const Users_Courses = sequelize.models.Users_Courses;

module.exports = { Users, Users_Courses };
