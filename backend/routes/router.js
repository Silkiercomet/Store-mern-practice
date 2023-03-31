const express = require("express");

// 1- creamos uns instacia de express.Router()
const recordRoutes = express.Router();

// 2- importamos nuestros controladores, la logica implementada en su respectiva ruta
const {
  getProducts,
  getProductById,
} = require("../controllers/controls");

// 3- llamamos al objeto router, definimos nuestra ruta y el metodo (get, post, update, delete) que utilizaremos   
recordRoutes.route("/").get(getProducts);

// 4- definimos un parametro es nuestra ruta ":" en este caso "id" que sera utilizado para tomar un valor especifco de la db
recordRoutes.route("/product/:id").get(getProductById);

// 5- exportamos nuestra instancia del objeto Router
module.exports = recordRoutes;
