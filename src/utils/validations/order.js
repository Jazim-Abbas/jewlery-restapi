const yup = require("yup");
const mongoose = require("mongoose");

const orderSchema = yup.object().shape({
  orders: yup
    .array()
    .of(
      yup.object().shape({
        quantity: yup.number().required(),
        price: yup.number().required(),
        product: yup
          .string()
          .test(
            "mongo-product-id",
            "Please provide valid product id",
            function (value) {
              return mongoose.Types.ObjectId.isValid(value);
            }
          )
          .required(),
      })
    )
    .required(),
});

module.exports = { orderSchema };
