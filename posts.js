const mongoose = require("mongoose");

const PostsSchema = new mongoose.Schema({

  symptoms: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
  },
  content: {
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