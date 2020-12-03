const router = require("express").Router();
const LeaderboardController = require("../controllers/leaderboardController");
const authentication = require("../middlewares/authentication");

router.get("/all", LeaderboardController.getAll);

router.use(authentication);
router.get("/detail", LeaderboardController.getOneUser);
router.post("/create", LeaderboardController.createNewData);

module.exports = router;
