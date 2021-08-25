const yup = require("yup");

const contactSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  message: yup.string().required(),
  email: yup.string().email().required(),
});

module.exports = { contactSchema };
