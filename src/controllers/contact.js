const contactService = require("../services/contact");

async function store(req, res) {
  const contact = await contactService.save(req.body);
  res.send({ contact });
}

module.exports = { store };
