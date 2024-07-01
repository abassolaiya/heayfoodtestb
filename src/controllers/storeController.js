const Store = require("../models/Store");

exports.createStore = async (req, res) => {
  try {
    const store = new Store(req.body);
    await store.save();
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
