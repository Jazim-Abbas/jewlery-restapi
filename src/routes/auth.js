const express = require("express");
const authController = require("../controllers/auth");
const fieldsValidate = require("../middlewares/validation");
const validations = require("../utils/validations/user");

const router = express.Router();
router
  .post(
    "/register",
    fieldsValidate(validations.registerSchema),
    authController.register
  )
  .post(
    "/login",
    fieldsValidate(validations.loginSchema),
    authController.login
  );

module.exports = router;
