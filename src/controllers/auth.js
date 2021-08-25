const userService = require("../services/user");

async function register(req, res) {
  await userService.register(req.body);
  res.send({ message: "User is successfully created" });
}

async function login(req, res) {
  let user = await userService.login(req.body);
  const token = user.generateToken();
  user = { ...user.excludePasswordField(), token };

  res.send({ user });
}

module.exports = { register, login };
