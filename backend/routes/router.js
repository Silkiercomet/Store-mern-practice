const express = require("express");
const recordRoutes = express.Router();
const {
  getProducts,
  getProductById,
} = require("../controllers/controls");

recordRoutes.route("/").get(getProducts);

recordRoutes.route("/product/:id").get(getProductById);

module.exports = recordRoutes;
