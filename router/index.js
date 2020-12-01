const router = require("express").Router();
const leaderboard = require("./leaderboard.js");
const user = require("./user.js");

router.use("/leaderboard", leaderboard);
router.use("/user", user);

module.exports = router;
