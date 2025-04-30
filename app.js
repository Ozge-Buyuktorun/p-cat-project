const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const ejs = require("ejs");
const Photo = require("./models/Photo");
const app = express();

mongoose.connect("mongodb://localhost/pcat-test-db")
  .then(() => console.log('Connected to pcat-test-db'))
  .catch(err => console.error('Connection error', err));

//Template Engine
app.set("view engine", "ejs");

//MiddleWares
//Purpose: Serves static files (like HTML, CSS, JS, images) from the "public" directory.
app.use(express.static("public"));

//Purpose: Parses incoming requests with URL-encoded payloads (from HTML form submissions).
app.use(express.urlencoded({ extended: true }));

//Purpose: Parses incoming requests with JSON payloads, often used in APIs.
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/add", (req, res) => {
  res.render("add");
});

app.post("/photos", async (req, res) => {
  await Photo.create(req.body);
  res.redirect("/");
});

const port = 3000;
app.listen(port, () => {
  console.log(`app is running now. Click it -> localhost:${port}`);
});
