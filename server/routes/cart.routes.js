const Router = require("express");
const CartController = require("./../controllers/cart.controller");
const authMiddleware = require("./../middlewares/auth.middleware");

const router = Router();

router.post("/add", authMiddleware, CartController.addCartProduct);
router.get("/", authMiddleware, CartController.getCart);
router.delete("/delete", authMiddleware, CartController.deleteCartProduct);
router.put("/update", authMiddleware, CartController.adjustProductCartQuantity);

module.exports = router;
