const express = require("express");
const userModel = require("./users");
const postsModel = require("./posts");
const session = require("express-session");
const app = express();

app.use(session({
  secret: 'abc123',
  resave: true,
  saveUninitialized: true
}));


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

app.post("/add_post", async (request, response) => {
    const post = new postsModel(request.body);
  
    try {
      await post.save();
      response.send(post);
    } catch (error) {
      response.status(500).send(error);
    }
  });

// Authentication and Authorization Middleware
const auth = function(req, res, next) {
  if (req.session && req.session.user)
    return next();
  else {
    return res.sendStatus(401);
  }
};

// Login endpoint
app.get('/login', function (req, res) {
  if (!req.body.username || !req.body.password) {
    res.send('login failed');    
  } else {
    req.session.user = req.body.username;
    res.send("login success! " + req.body.username);
  }
});

// Logout endpoint
app.get('/logout', function (req, res) {
  req.session.destroy();
  res.send("logout success!");
});

//Get content endpoint
app.get('/contents', auth, function (req, res) {
  res.send("You can only see this after you've logged in.");
});

module.exports = app;
