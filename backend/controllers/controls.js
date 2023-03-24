const productCollection = require("../model/UserModel");

const getProducts = async (req, res) => {
  const {featured, name, company} = req.query
  let queryObject = {}

  if(featured){
    queryObject.featured = featured === "true" ? true : false
  }
  if(name){
    queryObject.name = {$regex: name, $options:"i"}
  }
  if(company){
    queryObject.company = {$regex: company, $options:"i"}
  }

  try {
    const products = await productCollection.find(queryObject);
    res.status(200).json(products);
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
  getProductById
};
