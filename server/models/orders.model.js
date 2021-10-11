const { Schema, model, Types } = require("mongoose");

const OrderSchema = new Schema({
  userId: { type: Types.ObjectId, ref: "User" },
  orderTime: { type: Date, default: Date.now },
  products: [
    {
      product: { type: Types.ObjectId, ref: "Product" },
      quantity: { type: Number, required: true },
      total: { type: Number, required: true },
    },
  ],
});

module.exports = model("Order", OrderSchema);
