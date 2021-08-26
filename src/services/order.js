const Order = require("../db/order");

async function save(orders) {
  const _orders = await Order.insertMany(orders);
  return _orders;
}

module.exports = { save };
