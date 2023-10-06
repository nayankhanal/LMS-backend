require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const sequelize = require("./cofig/database");

const signup_route = require("./routes/signupRoute");
const login_route = require("./routes/loginRoute");
const course_route = require("./routes/courseRoute");
const course_details = require("./routes/courseDetailsRoute");
// const syllabus = require("./routes/courseDetailsRoute");
const my_learnings = require("./routes/LearningsRoute");
const syllabus_or_details_route = require("./routes/SyllabusOrDetailsRoute");
const course_assign = require("./routes/courseAssignRouter");
const admin = require("./routes/adminRoute/postAdminRoute");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connecttion successfull.");
  })
  .catch((error) => {
    console.log("Database connection unsuccessfull: ", error);
  });

app.get("/", (req, res) => {
  res.send("<h1>Hello from backend.</h1>");
});

app.use(course_details);
app.use(signup_route);
app.use(login_route);
app.use(course_route);
// app.use("/", syllabus);
app.use(my_learnings);
app.use(syllabus_or_details_route);
app.use(admin);
app.use(course_assign);

app.listen(process.env.BACKEND_PORT || 8000, (req, res) => {
  console.log(
    "Server successfully running on the port ",
    process.env.BACKEND_PORT || 8000
  );
});
