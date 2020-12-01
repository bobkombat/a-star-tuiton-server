"use strict";
const { v4: uuidv4 } = require("uuid");

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Leaderboard extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Leaderboard.init(
    {
      score: DataTypes.INTEGER,
      UserId: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "Leaderboard",
    }
  );

  Leaderboard.addHook("beforeCreate", (leaderboard, option) => {
    leaderboard.id = uuidv4();
  });
  return Leaderboard;
};
