const Product = require("../models/Product");
const cloudinary = require("../config/cloudinary");
const fs = require("fs");

exports.createProduct = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "products",
    });

    const productData = {
      ...req.body,
      image: result.secure_url,
    };

    const product = new Product(productData);
    await product.save();

    // Remove the file from the local upload directory
    fs.unlinkSync(req.file.path);

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
