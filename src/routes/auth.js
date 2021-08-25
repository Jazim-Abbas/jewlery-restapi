const express = require("express");
const authController = require("../controllers/auth");
const fieldsValidate = require("../middlewares/validation");
const { registerSchema } = require("../utils/validations/user");

const router = express.Router();
router
  .post("/register", fieldsValidate(registerSchema), authController.register)
  .post("/login", authController.login);

module.exports = router;
