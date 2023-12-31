const express = require("express"),
  router = express.Router(),
  { getAllProductsStatic, getAllProducts } = require("../controllers/products");

router.route("/").get(getAllProducts);
router.route("/static").get(getAllProductsStatic);

module.exports = router;
