const Product = require("../db/product");
const Exceptions = require("../utils/custom-exceptions");

async function getAll() {
  return await Product.find();
}

async function getSingle(id) {
  return await Product.findById(id);
}

async function getAllFeaturedProduct() {
  return await Product.find({ isFeatured: true });
}

async function save(product) {
  const _product = new Product({ ...product });
  return await _product.save();
}

async function update(id, product) {
  try {
    return await Product.findByIdAndUpdate(
      id,
      { $set: { ...product } },
      { new: true }
    );
  } catch (err) {
    throw new Exceptions.BadRequestException("Product not found");
  }
}

async function addImagePath(id, imagePath) {
  try {
    await Product.findByIdAndUpdate(id, { $set: { image: imagePath } });
  } catch (err) {
    throw new Exceptions.BadRequestException("Product not found");
  }
}

async function destory(id) {
  try {
    const product = await Product.findByIdAndDelete(id);
    if (!product.$isDeleted) throw new Error("");
  } catch (err) {
    throw new Exceptions.BadRequestException("Product not found");
  }
}

module.exports = {
  save,
  addImagePath,
  update,
  destory,
  getAll,
  getSingle,
  getAllFeaturedProduct,
};
