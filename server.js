const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes");
const session = require("express-session");
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const corsOptions ={
  origin: 'http://localhost:3000',
  credentials: true,            //access-control-allow-credentials:true
  optionSuccessStatus: 200
}

app.use(express.json());
app.use(session({
  secret: 'abc123',
  resave: true,
  saveUninitialized: true
}));
app.use(cors(corsOptions))

const username = "dengyi";
const password = "Dengyi1234";
const cluster = "cluster0.5gnxw";
const dbname = "myFirstDatabase";

mongoose.connect(
  `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
  {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use(Router);
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('public/uploads', express.static(path.join(__dirname, 'public/uploads')));

app.listen(process.env.PORT || 3001, () => {
  console.log("Server is running at port 3001");
});