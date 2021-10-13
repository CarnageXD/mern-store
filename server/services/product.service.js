const Product = require("./../models/product.model");

class ProductService {
  async create({title, ...product}) {
    const candidate = await Product.findOne({title});
    if (candidate) {
      throw new Error("This product is already exists");
    }
    return await Product.create({title, ...product});
  }

  async getItems(queryParams) {
    const totalItems = await Product.count()

    if (!queryParams) {
      return {items: await Product.find(), totalItems}
    }
    return {
      items: await Product.find().limit(+queryParams.limit).skip(+(queryParams.limit * (queryParams.page - 1))),
      totalItems
    }
  }

  async getOne(id) {
    const product = await Product.findById(id);
    if (!product) {
      throw new Error("This product does not exists");
    }
    return product;
  }

  async update(id, productBody) {
    const product = await Product.findById(id);
    if (!product) {
      throw new Error("This product does not exists");
    }
    let query = {
      $set: {},
    };
    for (let key in productBody) {
      if (product[key] && product[key] !== productBody[key]) {
        query.$set[key] = productBody[key];
      }
    }

    const updatedProduct = await Product.findByIdAndUpdate(id, query, {
      new: true,
    });
    return updatedProduct;
  }
  async delete(id) {
    const product = await Product.findById(id);
    if (!product) {
      throw new Error("This product does not exists");
    }
    return Product.findByIdAndDelete(id);
  }
}

module.exports = new ProductService();
