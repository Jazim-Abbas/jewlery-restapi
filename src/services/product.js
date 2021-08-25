const Product = require("../db/product");
const Exceptions = require("../utils/custom-exceptions");

async function save(product) {
  const _product = new Product({ ...product });
  return await _product.save();
}

async function addImagePath(id, imagePath) {
  try {
    await Product.findByIdAndUpdate(id, { $set: { image: imagePath } });
  } catch (err) {
    throw new Exceptions.BadRequestException("Product not found");
  }
}

module.exports = { save, addImagePath };
