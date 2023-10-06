require("dotenv").config();
const { Users } = require("../models/Users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const salt = 10;

function generateAccessToken(found) {
  return jwt.sign(
    {
      id: found.id,
      email: found.email,
      password: found.password,
    },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "15s" }
  );
}

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  await Users.findOne({ where: { email } })
    .then((found) => {
      if (!found) {
        console.log("User doesnot exists.");
        res.send({ response: "User doesnot exists", message: false });
      } else {
        console.log(found.password);
        console.log(process.env.BCRYPT_SALT);

        bcrypt.compare(password, found.password, (err, result) => {
          if (err) {
            console.log("Something went wrong while comparing.");
            res.send({
              response: "Something went wrong while comparing.",
              message: false,
            });
          } else {
            if (result === true) {
              //generating json web token

              const accessToken = generateAccessToken(found);
              const refreshToken = jwt.sign(
                {
                  id: found.id,
                  email: found.email,
                  password: found.password,
                },
                process.env.JWT_SECRET_KEY,
                { expiresIn: "48h" }
              );

              if (accessToken && refreshToken) {
                res.send({
                  response: "Successfully logged in.",
                  accessToken: accessToken,
                  refreshToken: refreshToken,
                  message: true,
                });
              } else {
                res.send({
                  response:
                    "Something gone wrong while generating token. Token didnot received.",
                  message: false,
                });
              }
            } else {
              res.send({
                response: "Password didnot match.",
                message: false,
              });
            }
          }
        });
      }
    })
    .catch((err) => {
      console.log("Could not log in: ", err);
      res.send({
        response: "Could not log in: ",
        err,
        message: false,
      });
    });
};

module.exports = { loginUser };
