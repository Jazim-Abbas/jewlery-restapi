const express = require("express");
const productController = require("../controllers/product");

const router = express.Router();
router.post("/", productController.store);

module.exports = router;
