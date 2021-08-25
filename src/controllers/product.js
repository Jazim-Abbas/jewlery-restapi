// const schemaValidate = require("../utils/validations/validate");
// const validations = require("../utils/validations/product");
const productService = require("../services/product");

async function store(req, res) {
  const product = await productService.save(req.cleanFields);
  res.send({ product });
}

module.exports = { store };
