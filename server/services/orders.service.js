const Orders = require('./../models/orders.model')
const Cart = require('./../models/cart.model')

class OrdersService {
    async addOrder(userId) {
        let cart = await Cart.findOne({userId})
        await Orders.create({userId, products: cart.products})
        await Cart.deleteOne({userId})
    }

    async getOrders(userId) {
        return Orders.find({userId}).populate('products.product')
    }

    async updateOrder() {

    }
}

module.exports = new OrdersService()