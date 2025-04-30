const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const ejs = require("ejs");
const Photo = require("./models/Photo");
require('dotenv').config();

const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;

const app = express();


const dbName = 'pcat-test-db';
const DB_URL = `mongodb://${DB_USER}:${DB_PASS}`
  + "@ac-4lhpcdy-shard-00-00.5nvubou.mongodb.net:27017"
  + ",ac-4lhpcdy-shard-00-01.5nvubou.mongodb.net:27017"
  + ",ac-4lhpcdy-shard-00-02.5nvubou.mongodb.net:27017"
  + "/pcat-test-db"
  + "?ssl=true"
  + "&replicaSet=atlas-4axn1k-shard-0"
  + "&authSource=admin"
  + "&retryWrites=true&w=majority";

  mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.error('MongoDB connection error:', err));

//Template Engine
app.set('view engine', 'ejs');

//MiddleWares
//Purpose: Serves static files (like HTML, CSS, JS, images) from the "public" directory.
app.use(express.static('public'));

//Purpose: Parses incoming requests with URL-encoded payloads (from HTML form submissions).
app.use(express.urlencoded({ extended: true }));

//Purpose: Parses incoming requests with JSON payloads, often used in APIs.
app.use(express.json());

app.get("/", async(req, res) => {
  const photos = await Photo.find({});
  res.render('index',{
    photos
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/add", (req, res) => {
  res.render("add");
});

app.post("/photos", async (req, res) => {
  await Photo.create(req.body);
  res.redirect('/');
});

const port = 3000;
app.listen(port, () => {
  console.log(`app is running now. and ${dbName} Database is active. 
  You can go this link in browser now : localhost:${port}`);
});
