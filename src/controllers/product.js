// const schemaValidate = require("../utils/validations/validate");
// const validations = require("../utils/validations/product");
const productService = require("../services/product");

async function findAll(req, res) {
  const products = await productService.getAll();
  res.send({ products });
}

async function findOne(req, res) {
  const product = await productService.getSingle(req.params.id);
  res.send({ product });
}

async function findAllFeatureProduct(req, res) {
  const products = await productService.getAllFeaturedProduct();
  res.send({ products });
}

async function findLastFeaturedProduct(req, res) {
  const product = await productService.getLastFeatured();
  res.send({ product });
}

async function store(req, res) {
  const product = await productService.save(req.cleanFields);
  res.send({ product });
}

async function update(req, res) {
  const product = await productService.update(req.params.id, req.cleanFields);
  res.send({ product });
}

async function uploadImage(req, res) {
  await productService.addImagePath(req.params.id, req.file.path);
  res.send({ message: "Image is uploaded successfully" });
}

async function destory(req, res) {
  await productService.destory(req.params.id);
  res.send({ message: "Product is deleted" });
}

module.exports = {
  store,
  uploadImage,
  update,
  destory,
  findAll,
  findOne,
  findAllFeatureProduct,
  findLastFeaturedProduct,
};
