const express = require("express");
const upload = require("../utils/upload-file");
const productController = require("../controllers/product");
const fieldsValidate = require("../middlewares/validation");
const validations = require("../utils/validations/product");
const validateFile = require("../middlewares/validate-file");

const router = express.Router();
router
  .post("/", fieldsValidate(validations.productSchema), productController.store)
  .patch(
    "/upload/:id",
    upload.single("image"),
    validateFile,
    productController.uploadImage
  )
  .patch(
    "/:id",
    fieldsValidate(validations.updateProductSchema),
    productController.update
  )
  .delete("/:id", productController.destory);

module.exports = router;
