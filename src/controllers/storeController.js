const Store = require("../models/Store");
const cloudinary = require("../config/cloudinary");
const fs = require("fs");

exports.createStore = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "stores",
    });

    const storeData = {
      ...req.body,
      image: result.secure_url,
    };

    const store = new Store(storeData);
    await store.save();

    // Remove the file from the local upload directory
    fs.unlinkSync(req.file.path);

    res.status(201).send(store);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getStores = async (req, res) => {
  try {
    const stores = await Store.find();
    res.status(200).send(stores);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getStoresByType = async (req, res) => {
  try {
    const stores = await Store.find({ storeType: req.params.type });
    res.status(200).send(stores);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getStoresByCity = async (req, res) => {
  try {
    const stores = await Store.find({ city: req.params.city });
    res.status(200).send(stores);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getStoresByCategory = async (req, res) => {
  try {
    const stores = await Store.find({ categories: req.params.category });
    res.status(200).send(stores);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.searchStores = async (req, res) => {
    try {
      const keywords = req.params.keywords;
      const regex = new RegExp(keywords, "i"); // Create a regex for case-insensitive search
  
      const stores = await Store.find({
        $or: [
          { name: regex },
          { address: regex },
          { city: regex },
          { description: regex },
          { storeType: regex },
        ],
      });
  
      res.status(200).send(stores);
    } catch (error) {
      res.status(400).send(error);
    }
  };
  