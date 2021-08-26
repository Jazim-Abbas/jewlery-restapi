const Order = require("../db/order");

async function getAll() {
  return await Order.find().populate("user", "-password").populate("product");
}

async function save(orders) {
  const _orders = await Order.insertMany(orders);
  return _orders;
}

module.exports = { save, getAll };
