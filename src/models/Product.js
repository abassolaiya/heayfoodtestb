const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  store: { type: mongoose.Schema.Types.ObjectId, ref: "Store", required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  measuringScale: { type: String, required: true },
  available: { type: Boolean, default: true },
});

module.exports = mongoose.model("Product", productSchema);
