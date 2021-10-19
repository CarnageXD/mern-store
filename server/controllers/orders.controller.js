const OrdersService = require("./../services/orders.service");

class OrdersController {
    async addOrderProducts(req, res) {
        try {
            const url = await OrdersService.addOrder(req.user.id);
            res.status(201).json(url);
        } catch (e) {
            res.status(500).json({message: e.message});
        }
    }

    async getOrders(req, res) {
        try {
            res.json(await OrdersService.getOrders(req.user.id));
        } catch (e) {
            res.status(500).json({message: e.message});
        }
    }
}

module.exports = new OrdersController();
