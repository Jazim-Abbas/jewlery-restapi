async function store(req, res) {
  res.send(req.cleanFields);
}

module.exports = { store };
