const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  mobileNo: String,
  address: String,
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

userSchema.pre("save", hashPassword);
function hashPassword(next) {
  var user = this;

  if (!user.password) return next();

  if (!user.isModified("password")) return next();

  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
}

userSchema.method("comparePassword", async function (password) {
  return await bcrypt.compare(password, this.password);
});

userSchema.method("generateToken", function (fields = {}) {
  const userWithoutPassword = excludePasswordField.bind(this)();
  const token = jwt.sign(
    { ...userWithoutPassword, ...fields },
    config.get("jwt.secret")
  );
  return token;
});

userSchema.method("excludePasswordField", function () {
  const fields = excludePasswordField.bind(this)();
  return fields;
});

const User = mongoose.model("User", userSchema);
module.exports = User;

function excludePasswordField() {
  const userFields = this._doc;
  const { password, ..._userFields } = userFields;

  return _userFields;
}
