const jwt = require("jsonwebtoken");

const isAuthenticated = (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (token == null) {
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
        console.log("here error");
        const id = req.params.id;
        if (id) {
          res.redirect(`/courses/details/${id}`);
        }
        res.send({ message: false });
      } else {
        if (data) {
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
    });
  } catch (error) {
    const id = req.params.id;
    if (id) {
      res.redirect(`/courses/details/${id}`);
    }
    res.send({ message: false });
  }
};

module.exports = isAuthenticated;
