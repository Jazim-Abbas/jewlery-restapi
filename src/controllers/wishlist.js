const wishlistService = require("../services/wishlist");

async function findUserWishlists(req, res) {
  const wishlists = await wishlistService.getUserAllWishlist(req.user._id);
  res.send({ wishlists });
}

async function store(req, res) {
  const wishlist = await wishlistService.save({
    ...req.cleanFields,
    user: req.user._id,
  });

  const message = wishlist ? "Added wishlist .." : "Already added ..";
  res.send({ message });
}

async function deleteSingle(req, res) {
  await wishlistService.deleteSingle(req.params.id);
  res.send({ message: "Successfully remove wishlist .." });
}

module.exports = { store, deleteSingle, findUserWishlists };
