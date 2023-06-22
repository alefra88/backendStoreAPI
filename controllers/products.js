const product = require("../models/product");
const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const search = "a";
  const products = await Product.find({
    name: { $regex: search, $options: "i" },
  });
  res.status(200).json({ products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
  const { featured, company, name } = req.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  } else {
  }
  if (company) {
    queryObject.company = company;
  } else {
  }
  if (name) {
    queryObject.name = { $regex: search, $options: "i" };
  } else {
  }
  console.log(queryObject);

  const products = await Product.find(queryObject);
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
