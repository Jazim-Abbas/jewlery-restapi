// const schemaValidate = require("../utils/validations/validate");
// const validations = require("../utils/validations/product");

async function store(req, res) {
  res.send(req.cleanFields);
}

module.exports = { store };
