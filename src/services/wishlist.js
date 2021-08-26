const Wishlist = require("../db/wishlist");

async function save(wishlist) {
  const wishlistInDB = await Wishlist.findOne({ ...wishlist });
  if (wishlistInDB) return null;

  const _wishlist = new Wishlist({ ...wishlist });
  return await _wishlist.save();
}

module.exports = { save };
