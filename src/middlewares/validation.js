const schemaValidate = require("../utils/validations/validate");

function fieldsValidate(schema) {
  return async function (req, _, next) {
    const cleanFields = await schemaValidate(schema, req.body);
    req.cleanFields = cleanFields;

    next();
  };
}

module.exports = fieldsValidate;
