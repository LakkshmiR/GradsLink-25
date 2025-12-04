const mongoose = require("mongoose");
const leaderboardSchema = new mongoose.Schema({
  rank: Number,
  name: String,
  numJobPosts: { type: Number, default: 0 },
  referrals: { type: Number, default: 0 },
  dailyStreak: { type: Number, default: 0 },
  totalPoints: { type: Number, default: 0 },
  email: { type: String, unique: true, required: true },
  openDate: { type: Date, default: null },
});
const leaderboardModel = mongoose.model("leaderboard", leaderboardSchema);
module.exports = leaderboardModel;
