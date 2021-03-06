const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { User } = require("../models");

class UserController {
  static login(req, res, next) {
    console.log(req.body);
    if (!req.body.email)
      return next({ statusMessage: "NOT_FOUND", errorMessage: "DATA USER IS NOT FOUND" });
    if (!req.body.password)
      return next({ statusMessage: "INVALID_ACCOUNT", errorMessage: "EMAIL/PASSWORD IS WRONG" });

    User.findOne({ where: { email: req.body.email } })
      .then((data) => {
        if (!data)
          return next({ statusMessage: "NOT_FOUND", errorMessage: "DATA USER IS NOT FOUND" });
        if (bcrypt.compareSync(req.body.password, data.password)) {
          const access_token = jwt.sign(
            {
              id: data.id,
              username: data.username,
              email: data.email,
            },
            process.env.JWT_SECRET
          );
          return res.status(200).json({ access_token, username: data.username, id: data.id });
        }
        return next({
          statusMessage: "INVALID_ACCOUNT",
          errorMessage: "EMAIL/PASSWORD IS WRONG",
        });
      })
      .catch((err) => next(err));
  }

  static register(req, res, next) {
    const userData = {
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    };

    User.findOne({ where: { email: userData.email } })
      .then((data) => {
        if (data)
          return next({
            statusMessage: "INVALID_ACCOUNT",
            errorMessage: "ACCOUNT ALREADY EXIST",
          });
        return User.create(userData);
      })
      .then((response) => {
        return res.status(201).json({
          email: response.email,
          username: response.username,
        });
      })
      .catch((err) => next(err));
  }
}

module.exports = UserController;
