const jwt = require("jsonwebtoken");

// const CourseDetails = require("../models/CourseDetails");

const isAuthenticated = (req, res, next) => {
  try {
    // console.log(req.headers["authorization"]);
    // console.log(req.payload);
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    // console.log(token);

    if (token == null) {
      // res.send("Token is null");
      const id = req.params.id;
      if (id) {
        res.redirect(`/courses/details/${id}`);
      }
      res.send({ message: false });
    }
    console.log(token);

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, data) => {
      console.log("Inside verify section");
      if (err) {
        // res.sendStatus(403);
        // res.send("Token didn't match.");
        console.log("here error");
        const id = req.params.id;
        // const courseId = req.params.courseId;
        if (id) {
          res.redirect(`/courses/details/${id}`);
        }
        res.send({ message: false });
      } else {
        // console.log("no error section");
        if (data) {
          // console.log(data);
          // res.send(data);
          req.data = data;
          next();
        } else {
          const id = req.params.id;
          if (id) {
            res.redirect(`/courses/details/${id}`);
          }

          res.send({ message: false });
        }
      }
      // console.log("Verification completed.");
    });
  } catch (error) {
    const id = req.params.id;
    if (id) {
      res.redirect(`/courses/details/${id}`);
    }
    res.send({ message: false });

    // const express = require("express");
    // const router = express.Router();

    // const getcoursedetails = require("../controllers/courseDetailsController");

    // router.get("/courses/details/:courseDetailsId", getcoursedetails);

    // module.exports = router;
  }
};

module.exports = isAuthenticated;
