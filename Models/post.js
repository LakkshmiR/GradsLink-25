const mongoose = require("mongoose");
const ConnectSchema = new mongoose.Schema({
  companyName: String,
  jobrole: String,
  experience: String,
  link: String,
  postedAt: {
    type: Date,
    default: Date.now,
  },
  postedBy: String,
  numJobPosts: { type: Number, default: 0 },
  openDate: { type: Date, default: null },
  email: String,
});
const ConnectModel = mongoose.model("jobs", ConnectSchema);
module.exports = ConnectModel;
