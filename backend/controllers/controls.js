const productCollection = require("../model/UserModel");

const getProducts = async (req, res) => {
  try {
    const products = await productCollection.find({});
    res.status(200).json(products);
  } catch (err) {
    console.log(err);
    res.status(404).send("not found");
  }
};

const getFeaturedProducts = async (req, res) => {
  try {
    const featured = await productCollection.find({ featured: true });
    res.status(200).json(featured);
  } catch (err) {
    console.log(err);
    res.status(404).send("not found");
  }
};

const getProductById = async (req, res) => {
  const id = req.params.id;

  try {
    const document = await productCollection.findById(id);
    if (!document) throw err;
    res.json(document);
  } catch (err) {
    console.log(err);
    return res.status(404).send(`Document not found ${err}`);
  }
};

module.exports = {
  getProducts,
  getFeaturedProducts,
  getProductById,
};
