const Orders = require('./../models/orders.model')
const Cart = require('./../models/cart.model')

class OrdersService {
    async addOrder(userId) {
        let orders = await Orders.findOne({userId})
        let cart = await Cart.findOne({userId})
        if (!orders) {
            return await Orders.create({
                userId,
                orders: [{cart: cart.id}]
            })
        } else {
            orders.orders.push({cart: cart.id})
        }
        // await Cart.deleteOne({userId})
        return await orders.save()
    }


    async getOrders(userId) {
        return Orders.findOne({userId}).populate('orders.cart')
    }

    async updateOrder() {

    }
}

module.exports = new OrdersService()