const orderService = require("../services/order");

async function findAll(req, res) {
  const orders = await orderService.getAll();
  res.send({ orders });
}

async function store(req, res) {
  const _orders = req.cleanFields.orders.map((order) => ({
    ...order,
    user: req.user._id,
  }));
  const orders = await orderService.save(_orders);

  res.send({ orders });
}

module.exports = { store, findAll };
