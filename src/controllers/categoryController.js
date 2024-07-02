const Category = require("../models/Category");
const cloudinary = require("../config/cloudinary");
const fs = require("fs");

exports.createCategory = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "categories",
    });

    const categoryData = {
      ...req.body,
      image: result.secure_url,
    };

    const category = new Category(categoryData);
    await category.save();

    fs.unlinkSync(req.file.path);

    res.status(201).send(category);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).send(categories);
  } catch (error) {
    res.status(400).send(error);
  }
};
