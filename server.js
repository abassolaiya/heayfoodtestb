const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const storeRoutes = require("./src/routes/storeRoutes");
const productRoutes = require("./src/routes/productRoutes");
const categoryRoutes = require("./src/routes/categoryRoutes");

const app = express();

mongoose.connect(
  "mongodb+srv://phibitech:James4vs17@cluster0.ob2nnw7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(bodyParser.json());

app.use(cors({}));

app.use("/api/v1/stores", storeRoutes);
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/category", categoryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
