const Orders = require("./../models/orders.model");
const Cart = require("./../models/cart.model");
require('dotenv').config()
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)

class OrdersService {
  async addOrder(userId) {
    let cart = await Cart.findOne({userId});
    await cart.populate('products.product')
    await Orders.create({userId, products: cart.products});
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: cart.products.map(item => {
        const storeItem = item
        console.log(storeItem.product)
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: storeItem.product.title,
            },
            unit_amount: storeItem.product.price * 100,
          },
          quantity: storeItem.quantity,
        }
      }),
      success_url: `${process.env.CLIENT_URL}profile`,
      cancel_url: `${process.env.CLIENT_URL}cart`,
    })
    await Cart.deleteOne({userId});
    return session.url
  }

  async getOrders(userId) {
    return await Orders.find({ userId }).populate("products.product");
  }

  async updateOrder() {}
}

module.exports = new OrdersService();
