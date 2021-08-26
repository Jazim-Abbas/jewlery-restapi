const Wishlist = require("../db/wishlist");
const Exceptions = require("../utils/custom-exceptions");

async function getUserAllWishlist(userId) {
  return await Wishlist.find({ user: userId }).populate("product");
}

async function save(wishlist) {
  const wishlistInDB = await Wishlist.findOne({ ...wishlist });
  if (wishlistInDB) return null;

  const _wishlist = new Wishlist({ ...wishlist });
  return await _wishlist.save();
}

async function deleteSingle(id) {
  const wishlist = await Wishlist.findByIdAndDelete(id);

  if (!wishlist || !wishlist.$isDeleted) {
    throw new Exceptions.BadRequestException("Not found Wishlist ...");
  }
}

module.exports = { save, deleteSingle, getUserAllWishlist };
