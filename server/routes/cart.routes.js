const Router = require('express')
const CartController = require('./../controllers/cart.controller')

const router = Router()

router.post('/add/:id', CartController.addCartProduct)
router.get('/:id', CartController.getCart)
router.delete('/delete/:id', CartController.deleteCartProduct)

module.exports = router