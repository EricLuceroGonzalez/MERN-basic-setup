// Create varible that ...

// ... manage Mongoose
const mongoose = require("mongoose");
  
// ... manage URL of mongo-atlas db (from cluster) *sended to env*
// connect that mongoose with Mongo cluster
db_uri = process.env.db_URI;

mongoose.connect(db_uri, { useNewUrlParser: true }, err => {
  if (!err) {
    console.log("Conexion exitosa :):");
  } else {
    console.log(`Error en conexion: \n ${err}`);
  }
});

// mydatabase2019*mongodb
