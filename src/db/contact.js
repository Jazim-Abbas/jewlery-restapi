const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  message: String,
});

const Contact = mongoose.model("Contact", schema);
module.exports = Contact;
