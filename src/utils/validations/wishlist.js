const yup = require("yup");
const mongoose = require("mongoose");

const wishlistSchema = yup.object().shape({
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
});

module.exports = { wishlistSchema };
