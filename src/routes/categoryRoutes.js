const express = require("express");
const categoryController = require("../controllers/categoryController");
const upload = require("../middlewares/upload");

const router = express.Router();

router.post("/", upload.single("image"), categoryController.createCategory);
router.get("/", categoryController.getCategories);

module.exports = router;
