const userService = require("../services/user");

async function myProfile(req, res) {
  const user = await userService.singleUser(req.user._id);
  res.send({ user });
}

async function singleUserProfile(req, res) {
  const user = await userService.singleUser(req.params.id);
  res.send({ user });
}

module.exports = { myProfile, singleUserProfile };
