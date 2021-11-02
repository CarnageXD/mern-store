const Orders = require("./../models/orders.model");
const Cart = require("./../models/cart.model");
const config = require('config')
const stripe = require("stripe")(config.get("STRIPE_PRIVATE_KEY"))

class OrdersService {
    async addOrder(userId) {
        let cart = await Cart.findOne({userId});
        await cart.populate('products.product')
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            line_items: cart.products.map(item => {
                const storeItem = item
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
            success_url: `${config.get("CLIENT_URL")}profile`,
            cancel_url: `${config.get("CLIENT_URL")}cart`,
        })
        await Orders.create({userId, products: cart.products, orderSessionId: session.id});
        await Cart.deleteOne({userId});
        return session.url
    }

    async getOrders(userId) {
        const orders = await Orders.find({userId}).populate("products.product")
        const ordersWithPaymentStatus = []
        for (let i = 0; i < orders.length; i++) {
            const session = await stripe.checkout.sessions.retrieve(orders[i].orderSessionId)
            const paymentStatus = {paymentStatus: session.payment_status}
            ordersWithPaymentStatus.push({...orders[i]._doc, ...paymentStatus})
        }
        return ordersWithPaymentStatus;
    }
}

module.exports = new OrdersService();
