const express = require("express");
const orderController = require("../controllers/order");
const fieldsValidate = require("../middlewares/validation");
const validations = require("../utils/validations/order");

const router = express.Router();
router.post(
  "/",
  fieldsValidate(validations.orderSchema),
  orderController.store
);

module.exports = router;
