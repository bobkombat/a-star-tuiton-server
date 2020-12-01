const router = require("express").Router();
const LeaderboardController = require("../controllers/leaderboardController");

router.get("/all", LeaderboardController.getAll);
router.get("/view-detail", LeaderboardController.getOneUser);

module.exports = router;
