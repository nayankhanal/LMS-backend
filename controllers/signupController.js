require("dotenv").config();
const { Users } = require("../models/Users");
const bcrypt = require("bcrypt");

const salt = 10;

const signupUser = async (req, res) => {
  const { username, email, password } = req.body;

  await Users.findOne({ where: { email: email } })
    .then((found) => {
      if (!found) {
        bcrypt.hash(password, process.env.BCRYPT_SALT, (err, hash) => {
          if (err) {
            console.log("Could not hash: ", err);
            res.send({ response: "Something went wrong", message: false });
          } else {
            Users.create({
              username,
              email,
              password: hash,
            })
              .then(() => {
                res.send({ message: true });
              })
              .catch((err) => {
                console.log("Could not create user: ", err);
                res.send({ response: "Something went wrong", message: false });
              });
          }
        });
      } else {
        console.log("User already exists.");
        res.send({ response: "User already exists.", message: false });
      }
    })
    .catch((err) => {
      console.log("Could not create user: ", err);
      res.send({ response: "Could not create user: ", err, message: false });
    });
};

module.exports = { signupUser };
