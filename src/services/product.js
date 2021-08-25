const Product = require("../db/product");

async function save(product) {
  const _product = new Product({ ...product });
  return await _product.save();
}

module.exports = { save };
