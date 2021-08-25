const express = require("express");
const contactController = require("../controllers/contact");
const fieldsValidate = require("../middlewares/validation");
const validations = require("../utils/validations/contact");

const router = express.Router();
router.post(
  "/",
  fieldsValidate(validations.contactSchema),
  contactController.store
);

module.exports = router;
