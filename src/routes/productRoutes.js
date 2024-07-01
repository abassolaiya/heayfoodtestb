const express = require("express");
const productController = require("../controllers/productController");

const router = express.Router();

router.post("/", productController.createProduct);
router.get("/store/:storeId", productController.getProductsByStore);

module.exports = router;
