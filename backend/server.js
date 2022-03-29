import express from 'express'
import session from 'express-session'

const app = express()
app.use(session({
    secret: 'abc123',
    resave: true,
    saveUninitialized: true
}));
app.use(express.json());
 
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
 
app.listen(3000);
console.log("app running at http://localhost:3000");