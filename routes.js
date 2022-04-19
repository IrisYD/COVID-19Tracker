const express = require("express");
const userModel = require("./users");
const postsModel = require("./posts");
const session = require("express-session");
const cors = require('cors');
const app = express();

app.use(session({
  secret: 'abc123',
  resave: true,
  saveUninitialized: true,
  cookie: { 
    secure: false,
    domain: '127.0.0.1',
    maxAge: 8*60*60*1000,
    sameSite: 'none'
  }
}));

app.use(cors({ credentials: true, origin: true }))

app.set('trust proxy', 1);

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
app.post('/login', async (req, res) => {
  console.log("SessionID: " + req.sessionID);

  if (!req.body.name || !req.body.password) {

    res.status(500).send('login failed');    

  } else if (req.session.user) {
    
    console.log("Session exists");
    res.status(500).send("Already logged in as " + req.session.user);

  } else {
    
    const user = await userModel.find({"name": req.body.name});
    console.log(user);

    if (user.length == 0) {

      res.status(500).send("Cannot find user " + req.body.name);

    } else if (!user[0].password || user[0].password != req.body.password){

      res.status(500).send("Password incorrect!");

    } else {

      // Set session.
      req.session.user = req.body.name;
      console.log(req.session.user);
      console.log("Saved to session.");
      res.send(req.body.name);

    }
  }
});

app.post("/add_user", async (req, res) => {
  console.log("SessionID: " + req.sessionID);

  // Check if the request body is complete.
  if (!req.body.name || !req.body.password) {

    res.status(500).send('Sign up failed');
    
  // Check already logged in.
  } else if (req.session.user) {

    console.log("Session exists");
    res.status(500).send("Already logged in as " + req.session.user);

  }

  // Check if the user is already registered.
  const foundUser = await userModel.find({"name": req.body.name});

  if (foundUser.length != 0) {
    res.status(500).send("Already registered");
  }

  const user = new userModel(req.body);

  try {

    await user.save();
    // Set session to login
    req.session.user = req.body.name;
    res.send("Sign up successfully " + req.body.name);

  } catch (error) {

    res.status(500).send("Saving to db failed");

  }
});

// Logout endpoint
app.get('/logout', function (req, res) {
  console.log("SessionID: " + req.sessionID);

  if (!req.session.user) {
    res.status(500).send("Not logged in!")
  } else {
    req.session.destroy();
    res.send("logout success!");
  }
});

// Get content endpoint
app.get('/contents', auth, function (req, res) {
  res.send("You can only see this after you've logged in.");
});

// Get currently logged-in username
app.get('/user', function(req, res) {
  res.setHeader('Content-Type', 'application/json')
  if (req.session && req.session.user) {
    res.end(JSON.stringify({user: req.session.user}))
  } else {
    res.end(JSON.stringify({user: null}))
  }
});

// Get the current user's profile
app.get('/me', auth, async (req, res) => {
  console.log("Fetching current user's profile:", req.session.user);
  try {
    const profile = await userModel.findOne({
                                            'name': req.session.user
                                          }).select('-password');

    if (!profile) {
      res.status(400).json({ msg: 'User not found' });
      return;
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Update the current user's profile
app.post('/profile_update', auth, async (req, res) => {
  console.log("Updating current user's profile:", req.session.user);

  if (req.body.name && req.body.name !== req.session.user) {
    const usernameFound = await userModel.find({'name': req.body.name});
    if (usernameFound.length !== 0) {
      res.status(400).json({ msg: 'Username already exists' });
      return;
    }
  }

  try {
    const profile = await userModel.findOneAndUpdate(
        { name: req.session.user },
        { $set: req.body },
        { new: true }
    );

    if (!profile) {
      res.status(400).json({ msg: 'User not found' });
      return;
    }

    req.session.user = profile.name;
    console.log('Session user changed to:', req.session.user);

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
})


module.exports = app;
