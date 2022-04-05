const mongoose = require("mongoose");

const PostsSchema = new mongoose.Schema({

  symptoms: {
    type: Array,
    required: true,
  },
  userId: {
    type: String,
  },
  comments: {
    type: String,
  },
  startTime: {
    type: String,
  },
  testResult: {
    type: String,
  },
  vaccine: {
    type: String,
  }
});

const Posts = mongoose.model("Posts", PostsSchema);

module.exports = Posts;