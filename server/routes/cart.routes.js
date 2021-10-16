const Router = require("express");
const CartController = require("./../controllers/cart.controller");
const authMiddleware = require("./../middlewares/auth.middleware");

const router = Router();

router.post("/add/:id", CartController.addCartProduct);
router.get("/:id", authMiddleware, CartController.getCart);
router.delete("/delete/:id", CartController.deleteCartProduct);
router.put("/update/:id", CartController.adjustProductCartQuantity);

module.exports = router;
