const yup = require("yup");

const registerSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  mobileNo: yup.number().required(),
  address: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

module.exports = { registerSchema, loginSchema };
