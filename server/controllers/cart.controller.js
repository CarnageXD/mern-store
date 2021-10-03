const CartService = require('./../services/cart.service')

class CartController {
    async addCartProduct(req, res) {
        try {
            res.json(await CartService.addCartProduct(req.params.id, req.body))
        } catch (e) {
            res.status(500).json({message: e.message})
        }
    }

    async getCart(req, res) {
        try {
            const products = await CartService.getCart(req.params.id, req.body)
            res.json(products)
        } catch (e) {
            res.status(500).json({message: e.message})
        }
    }

    async deleteCartProduct(req, res) {
        try {
            await CartService.deleteCartProduct(req.params.id)
            res.json('Product was successfully deleted from cart')
        } catch (e) {
            res.status(500).json({message: e.message})
        }
    }
}

module.exports = new CartController()

