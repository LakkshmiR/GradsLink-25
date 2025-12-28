const mongoose = require("mongoose");
const PostCommentSchema = new mongoose.Schema(
  {
    comment: String,
    email: String,
    name: String,
    postid: String,
  },
  { timestamps: true }
);
const PostCommentModel = mongoose.model("postedComments", PostCommentSchema);
module.exports = PostCommentModel;
