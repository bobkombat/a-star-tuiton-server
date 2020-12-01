const { Leaderboard } = require("../models");

class LeaderboardController {
  static getAll(req, res, next) {
    Leaderboard.findAll({ limit: 10, order: [["score", "DESC"]] })
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
    })
      .then((data) => {
        return res.status(200).json(data);
      })
      .catch((err) => next(err));
  }
}

module.exports = LeaderboardController;
