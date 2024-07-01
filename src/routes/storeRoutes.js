const express = require("express");
const storeController = require("../controllers/storeController");

const router = express.Router();

router.post("/", storeController.createStore);
router.get("/", storeController.getStores);
router.get("/type/:type", storeController.getStoresByType);
router.get("/city/:city", storeController.getStoresByCity);
router.get("/category/:category", storeController.getStoresByCategory);

module.exports = router;
