// creating the server
const express = require("express");
const app = express();
// import CORS
const cors = require('cors');
// check computer environment port number
const port = process.env.PORT || 3001;

// // Require artist schema file to save it:
const Article = require('../models/SchemaArticle');

// To parse a boydy to json
var bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Use CORS
app.use(cors());

// When some one calls .get() we catch the request data and send a response data
app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

// initi CRUD -------------
// The CRUD things
// R: read (All)
app.get("/api/v1/article", (req, res) => {
  // find() all artist from db
  Article.find()
    .then(newArticle => res.status(200).send(newArticle))
    .catch(err => res.status(400).send(err));
});

// Send variable when this file is "require"
module.exports = { app, port };