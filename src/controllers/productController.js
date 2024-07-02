const Product = require("../models/Product");
const Store = require("../models/Store")
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

exports.searchStoresByProduct = async (req, res) => {
  try {
    const keywords = req.params.keywords;
    const regex = new RegExp(keywords, "i"); // Create a regex for case-insensitive search

    const matchingProducts = await Product.find({ description: regex }).select(
      "store"
    );

    const matchingStoreIds = matchingProducts.map((product) => product.store);

    const stores = await Store.find({
      $or: [{ name: regex }, { _id: { $in: matchingStoreIds } }],
    });

    res.status(200).send(stores);
  } catch (error) {
    console.error("Error fetching search results:", error);
    res.status(400).send(error);
  }
};
