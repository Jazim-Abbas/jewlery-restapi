const wishlistService = require("../services/wishlist");

async function store(req, res) {
  const wishlist = await wishlistService.save({
    ...req.cleanFields,
    user: req.user._id,
  });

  const message = wishlist ? "Added wishlist .." : "Already added ..";
  res.send({ message });
}

module.exports = { store };
