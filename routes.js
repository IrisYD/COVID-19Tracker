const express = require("express");
const userModel = require("./users");
const postsModel = require("./posts");
const app = express();


app.post("/add_user", async (request, response) => {
    const user = new userModel(request.body);
  
    try {
      await user.save();
      response.send(user);
    } catch (error) {
      response.status(500).send(error);
    }
});

app.get("/users", async (request, response) => {
    const users = await userModel.find({});
  
    try {
      response.send(users);
    } catch (error) {
      response.status(500).send(error);
    }
  });

app.get("/posts", async (request, response) => {
const posts = await postsModel.find({});

try {
    response.send(posts);
} catch (error) {
    response.status(500).send(error);
}
});


module.exports = app;
