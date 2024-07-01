const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  description: { type: String, required: true },
  openingTime: { type: String, required: true },
  closingTime: { type: String, required: true },
  openingDays: { type: [String], required: true },
  image: { type: String, required: true },
  storeType: {
    type: String,
    enum: ["restaurant", "groceries"],
    required: true,
  },
});

module.exports = mongoose.model("Store", storeSchema);
