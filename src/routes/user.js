const express = require("express");
const userController = require("../controllers/user");
const isAuthMiddleware = require("../middlewares/is-auth");

const router = express.Router();
router
  .get("/my-profile", isAuthMiddleware, userController.myProfile)
  .get("/profile/:id", userController.singleUserProfile);

module.exports = router;
