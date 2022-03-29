const mongoose = require("mongoose");

const PostsSchema = new mongoose.Schema({

  symptoms: {
    type: Array,
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

const Post = mongoose.model("Post", PostsSchema);

module.exports = Post;