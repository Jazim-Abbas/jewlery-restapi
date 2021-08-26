const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: String,
  description: String,
  size: String,
  color: String,
  category: String,
  price: Number,
  isFeatured: {
    type: Boolean,
    default: false,
  },
  image: String,
  updatedAt: Date,
});

schema.pre("save", function (next) {
  const product = this;
  product.updatedAt = new Date();
  next();
});

const Product = mongoose.model("Product", schema);
module.exports = Product;
