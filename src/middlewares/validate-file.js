const Exceptions = require("../utils/custom-exceptions");

module.exports = function (req, res, next) {
  const file = req.file;

  if (!file) {
    throw new Exceptions.ValidationException("Please upload image");
  }

  next();
};
