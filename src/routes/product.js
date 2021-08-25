const express = require("express");
const productController = require("../controllers/product");
const fieldsValidate = require("../middlewares/validation");
const validations = require("../utils/validations/product");

const router = express.Router();
router.post(
  "/",
  fieldsValidate(validations.productSchema),
  productController.store
);

module.exports = router;
