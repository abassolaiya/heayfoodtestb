const express = require("express");
const storeController = require("../controllers/storeController");
const upload = require("../middlewares/upload");

const router = express.Router();

router.post("/", upload.single("image"), storeController.createStore);
router.get("/", storeController.getStores);
router.get("/type/:type", storeController.getStoresByType);
router.get("/city/:city", storeController.getStoresByCity);
router.get("/category/:category", storeController.getStoresByCategory);

router.get("/search/:keywords", storeController.searchStores);
module.exports = router;
