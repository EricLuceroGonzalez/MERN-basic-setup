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

// Use dot-env
var dotenv = require('dotenv');
dotenv.config();

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

//  C: CREATE ------------
app.post("/api/v1/articulo", (req, res) => {
  // Recibir el articulo
  const articuloInfo = req.body;
  console.log("req.body");
  console.log(articuloInfo);

  // Guardar en db
  const newArticle = new Article(articuloInfo);
  newArticle.save((err, newArticle) => {
    return err
      ? res.status(400).send({ mensaje: "Hay un error", res: err })
      : res.status(200).send({ mensaje: "Article guardado", res: newArticle });
  });
});

app.post("/api/v1/ticket", (req, res) => {
  //Recibir el body de la peticion
  const aTicket = req.body;
  console.log(aTicket);

  const newTicket = new Ticket(aTicket);
  newTicket.save((err, newTicket) => {
    return err
      ? res.status(400).send({ mensaje: "Error en (ticket)", res: newTicket })
      : res.status(201).send({ mensaje: "Ticket creado", res: newTicket });
  });
});

//  R: READ ------------

// Get: Todos los articulos
app.get("/api/v1/articulos/", (req, res) => {
  // ----> metodo de Mongoose: find()
  Article.find()
    .then(articulos => res.status(200).send(articulos))
    .catch(articulos => res.status(400).send(articulos));
});
// Get: por id
app.get("/api/v1/articulos/:id", (req, res) => {
  // ----> metodo de Mongoose: findById()
  Article.findById(req.params.id)
    .then(articulos => res.status(200).send(articulos))
    .catch(articulos => res.status(400).send(articulos));
});

//  U: UPDATE ------------

// Update de articulo
app.put("/api/v1/articulos/:id", (req, res) => {
  const articuloID = req.params.id;
  Article.findByIdAndUpdate(articuloID, { $set: req.body }, { new: true })
    .then(UpdateArticulo => res.status(200).send(UpdateArticulo))
    .catch(UpdateArticulo => res.status(400).send(UpdateArticulo));
});

//  D: DELETE ------------
app.delete("/api/v1/articulos/:id", (req, res) => {
  Article.findByIdAndDelete(req.params.id)
    .then(DeleteArticulo => res.status(200).send(DeleteArticulo))
    .catch(DeleteArticulo => res.status(400).send(DeleteArticulo));
});


// Send variable when this file is "require"
module.exports = { app, port };