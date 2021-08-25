const schemaValidate = require("../utils/validations/validate");

function fieldsValidate(schema) {
  return async function (req, _, next) {
    await schemaValidate(schema, req.body);

    next();
  };
}

module.exports = fieldsValidate;
