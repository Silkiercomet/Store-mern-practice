// express : fremework de node.js
const express = require("express");

// mongoose : interactua con mongodb
const mongoose = require("mongoose");

// cors permite que la app interactue con diferentes webs, EJ: localhost | atlas.mongodb.com
const cors = require("cors");

// body-parser : formatea los body request al recibirlos
const bodyParser = require("body-parser");

// permite crear variables privadas .env
const dotenv = require("dotenv");

// 1- se crea una instancia de express en la constante app
const app = express();
// 2- se importa el router que contiene nuestras rutas
const recordRoutes = require("./routes/router");

// 3- se inicializa nuestros paquetes
app.use(bodyParser.json());
app.use(cors());
dotenv.config({ path: "./config.env" });

// 4- conectamos nuestra app con su respectiva base de datos
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// 5- asignamos un puerto local para nuestra app 
const port = process.env.PORT || 5000;

// 6- formateamos nuestra ruta
app.use("/api", recordRoutes);

// 7- empezamos a escuchar los request a nuestras rutas 
app.listen(port, (req, res) => {
  console.log(`Server running on port ${port}`);
});
