const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).send(product);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getProductsByStore = async (req, res) => {
  try {
    const products = await Product.find({ store: req.params.storeId });
    res.status(200).send(products);
  } catch (error) {
    res.status(400).send(error);
  }
};
