const Order = require("../db/order");

async function getAll() {
  return Order.find().populate("user", "-password").populate("product");
}

async function getUserAllOrders(userId) {
  return Order.find({ user: userId }).populate("product");
}

async function save(orders) {
  const _orders = await Order.insertMany(orders);
  return _orders;
}

module.exports = { save, getAll, getUserAllOrders };
