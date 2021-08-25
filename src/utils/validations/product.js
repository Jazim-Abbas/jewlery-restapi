const yup = require("yup");

const productSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  size: yup.string().required(),
  color: yup.string().required(),
  category: yup.string().required(),
  price: yup.number().required(),
  isFeatured: yup.boolean().required(),
});

module.exports = { productSchema };
