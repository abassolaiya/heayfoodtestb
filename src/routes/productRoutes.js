const express = require("express");
const productController = require("../controllers/productController");
const upload = require("../middlewares/upload");

const router = express.Router();

router.post("/", upload.single("image"), productController.createProduct);
router.get("/store/:storeId", productController.getProductsByStore);

module.exports = router;
