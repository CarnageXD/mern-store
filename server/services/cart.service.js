const Cart = require("./../models/cart.model");
const Product = require("./../models/product.model");

class CartService {
  async addCartProduct(userId, { total = 1, quantity = 1, product }) {
    let cart = await Cart.findOne({ userId });
    let productData = await Product.findOne({ _id: product });
    let price = productData.price;
    total = price * quantity;

    if (!cart) {
      return await Cart.create({
        userId,
        products: [{ product, quantity, total }],
      });
    } else {
      let itemIndex = cart.products.findIndex((p) => p.product == product);
      if (itemIndex === -1) {
        cart.products.push({ product, quantity, total });
      } else {
        cart.products[itemIndex].quantity++;
        cart.products[itemIndex].total =
          price * cart.products[itemIndex].quantity;
      }
      return await cart.save();
    }
  }

  async getCart(userId) {
    return Cart.findOne({ userId }).populate("products.product");
  }

  async deleteCartProduct(userId, productCartId) {
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      throw new Error("This cart does not exists");
    }
    await Cart.updateMany({
      $pull: { products: { product: { _id: productCartId.product } } },
    });
  }

  async adjustProductCartQuantity(userId, body) {
    const cart = await Cart.findOne({ userId });
    let productData = await Product.findOne({ _id: body.product });
    let price = productData.price;
    const itemIndex = cart.products.findIndex((p) => p.product == body.product);

    if (body.quantity > 0 && body.quantity < 11) {
      cart.products[itemIndex].quantity = body.quantity;
      cart.products[itemIndex].total = price * body.quantity;
    } else throw new Error("Invalid values, should be 11 > x > 0");
    await cart.save();
  }
}

module.exports = new CartService();
