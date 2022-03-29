const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes");
const session = require("express-session");

const app = express();

app.use(express.json());
app.use(session({
  secret: 'abc123',
  resave: true,
  saveUninitialized: true
}));

const username = "dengyi";
const password = "Dengyi1234";
const cluster = "cluster0.5gnxw";
const dbname = "myFirstDatabase";

mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
//   {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
//   }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(Router);

app.listen(3001, () => {
  console.log("Server is running at port 3001");
});