const Cart = require('./../models/cart.model')

class CartService {
    async addCartProduct(userId, {price, quantity, product}) {
        let cart = await Cart.findOne({userId})
        let total = price * quantity

        if (!cart) {
            return await Cart.create({
                userId,
                products: [{product, quantity, total}]
            })
        } else {
            let itemIndex = cart.products.findIndex(p => p.product == product)
            if (itemIndex === -1) {
                cart.products.push({product, quantity, total})
            } else {
                cart.products[itemIndex].quantity++;
                cart.products[itemIndex].total = price * cart.products[itemIndex].quantity
            }
            return await cart.save()
        }
    }

    async getCart(userId) {
        return Cart.findOne({userId}).populate('products.product')
    }

    async deleteCartProduct(userId, productCartId) {
        const cart = await Cart.findOne({userId})
        if (!cart) {
            throw new Error('This cart does not exists')
        }
        await Cart.updateOne({$pull: {"products": {productCartId}}})
    }
}

module.exports = new CartService()