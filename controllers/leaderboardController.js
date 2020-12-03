const { Leaderboard, User } = require("../models");
const leaderboard = require("../models/leaderboard");

class LeaderboardController {
  static getAll(req, res, next) {
    Leaderboard.findAll({ limit: 10, order: [["score", "DESC"]], include: [{ model: User }] })
      .then((data) => {
        return res.status(200).json(data);
      })
      .catch((err) => next(err));
  }

  static getOneUser(req, res, next) {
    Leaderboard.findAll({
      where: { UserId: req.userLogin.id },
      limit: 10,
      order: [["score", "DESC"]],
      include: [{ model: User }],
    })
      .then((data) => {
        return res.status(200).json(data);
      })
      .catch((err) => next(err));
  }

  static createNewData(req, res, next) {
    const leaderboardData = {
      score: +req.body.score,
      UserId: req.body.UserId,
    };

    console.log(leaderboardData);

    Leaderboard.create(leaderboardData)
      .then((data) => {
        return res.status(201).json(data);
      })
      .catch((err) => next(err));
  }
}

module.exports = LeaderboardController;
