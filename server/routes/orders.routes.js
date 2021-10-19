const Router = require('express')
const OrdersController = require('./../controllers/orders.controller')
const authMiddleware = require("./../middlewares/auth.middleware");

const router = Router()

router.post('/create/', authMiddleware, OrdersController.addOrderProducts)
router.get('/', authMiddleware, OrdersController.getOrders)

module.exports = router