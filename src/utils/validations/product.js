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

const updateProductSchema = yup.object().shape({
  name: yup.string().notRequired(),
  description: yup.string().notRequired(),
  size: yup.string().notRequired(),
  color: yup.string().notRequired(),
  category: yup.string().notRequired(),
  price: yup.number().notRequired(),
  isFeatured: yup.boolean().notRequired(),
});

module.exports = { productSchema, updateProductSchema };
