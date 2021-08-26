const express = require("express");
const authRoutes = require("./auth");
const userRoutes = require("./user");
const contactRoutes = require("./contact");
const productRoutes = require("./product");
const orderRoutes = require("./order");
const wishlistRoutes = require("./wishlist");

const router = express.Router();

router.get("/", (req, res) => {
  res.send({ message: "HomeRoute" });
});
router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/contact", contactRoutes);
router.use("/product", productRoutes);
router.use("/order", orderRoutes);
router.use("/wishlist", wishlistRoutes);

module.exports = router;
