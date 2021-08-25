const { User } = require("../db");
const Exceptions = require("../utils/custom-exceptions");

async function register(userFields) {
  try {
    const user = new User({ ...userFields });
    await user.save();
  } catch (err) {
    throw new Exceptions.BadRequestException("Email already exists");
  }
}

async function login(credentials) {
  const { email, password } = credentials;
  const userInDb = await findByEmail(email);

  if (!(await isUserExistsAndPasswordMatched(userInDb, password)))
    throw new Exceptions.BadRequestException("Your credentials not matched");

  return userInDb;
}

async function singleUser(userId) {
  return await User.findById(userId).select("-password");
}

module.exports = { register, login, singleUser };

function findByEmail(email) {
  return User.findOne({ email });
}

async function isUserExistsAndPasswordMatched(userInDb, password) {
  if (!userInDb) return false;

  return await userInDb.comparePassword(password);
}
