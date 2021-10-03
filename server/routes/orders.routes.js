const Router = require('express')
const OrdersController = require('./../controllers/orders.controller')

const router = Router()

router.post('/create/:id', OrdersController.addOrderProducts)
router.get('/:id', OrdersController.getOrders)
router.patch('/:id', OrdersController.updateOrder)

module.exports = router