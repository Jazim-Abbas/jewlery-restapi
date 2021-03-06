const express = require("express");
const wishlistController = require("../controllers/wishlist");
const isAuthMiddleware = require("../middlewares/is-auth");
const fieldsValidate = require("../middlewares/validation");
const validations = require("../utils/validations/wishlist");

const router = express.Router();
router
  .post(
    "/",
    isAuthMiddleware,
    fieldsValidate(validations.wishlistSchema),
    wishlistController.store
  )
  .get("/", isAuthMiddleware, wishlistController.findUserWishlists)
  .delete("/:id", isAuthMiddleware, wishlistController.deleteSingle);

module.exports = router;
