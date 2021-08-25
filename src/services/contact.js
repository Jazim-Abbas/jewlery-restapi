const Contact = require("../db/contact");

async function save(contact) {
  const _contact = new Contact({ ...contact });
  return await _contact.save();
}

module.exports = { save };
