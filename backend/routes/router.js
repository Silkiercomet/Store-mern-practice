const express = require("express");
const recordRoutes = express.Router();
const {
  getProducts,
  getFeaturedProducts,
  getProductById,
} = require("../controllers/controls");

recordRoutes.route("/").get(getProducts);

recordRoutes.route("/product/:id").get(getProductById);

recordRoutes.route("/featured").get(getFeaturedProducts);

module.exports = recordRoutes;
