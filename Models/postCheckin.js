const mongoose = require("mongoose");
const PostcheckinSchema = new mongoose.Schema(
  {
    name: String,
    postTitle: String,
    postContent: String,
    email: String,
    postedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);
const PostcheckinModel = mongoose.model("postCheckin", PostcheckinSchema);
module.exports = PostcheckinModel;
