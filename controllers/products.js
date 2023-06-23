const product = require("../models/product");
const Product = require("../models/product");

const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({
    /*name: { $regex: search, $options: "i"*/
  }).sort("-name price");
  res.status(200).json({ products, nbHits: products.length });
};

const getAllProducts = async (req, res) => {
  const { featured, company, name, sort } = req.query;
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
    queryObject.name = { $regex: name, $options: "i" };
  } else {
  }
  console.log(queryObject);

  let result = Product.find(queryObject);
  if (sort) {
    const sortList = sort.split(",").join(" ");
    result = result.sort(sortList);
  } else {
    result = result.sort("CreateAt");
  }
  const products = await result;
  res.status(200).json({ products, nbHits: products.length });
};

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
