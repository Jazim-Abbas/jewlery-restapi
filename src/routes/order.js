const express = require("express");
const orderController = require("../controllers/order");
const fieldsValidate = require("../middlewares/validation");
const validations = require("../utils/validations/order");
const isAuthMiddleware = require("../middlewares/is-auth");

const router = express.Router();
router
  .post(
    "/",
    isAuthMiddleware,
    fieldsValidate(validations.orderSchema),
    orderController.store
  )
  .get("/", orderController.findAll)
  .get("/user", isAuthMiddleware, orderController.findUserOrders);

module.exports = router;
