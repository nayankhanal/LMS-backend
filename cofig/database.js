require("dotenv").config();
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DATABASE_HOST,
    dialect: "mysql",
  }
);

// sequelize
//   .sync()
//   .then(() => {
//     console.log("Database table created successfully.");
//   })
//   .then((err) => {
//     console.log("Unable to create database table: ", err);
//   });

module.exports = sequelize;
