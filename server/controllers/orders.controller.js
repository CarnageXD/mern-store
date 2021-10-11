const OrdersService = require("./../services/orders.service");

class OrdersController {
  async addOrderProducts(req, res) {
    try {
      await OrdersService.addOrder(req.params.id);
      res.status(201).json({ message: "Products was successfully ordered " });
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

  async getOrders(req, res) {
    try {
      res.json(await OrdersService.getOrders(req.params.id));
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }

  async updateOrder(req, res) {
    try {
      await OrdersService.updateOrder();
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  }
}

module.exports = new OrdersController();
