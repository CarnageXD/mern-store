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
    const isEmpty = x => !Object.keys(x).length
    if (isEmpty(queryParams)) {
      return {items: await Product.find(), totalItems: 1}
    }

    //pagination
    const page = queryParams.page || 1
    const limit = queryParams.limit || 0
    const totalItems = queryParams.page && queryParams.limit ? await Product.find().countDocuments() : 1

    //order
    const order = queryParams.order || ''

    //filter
    const category = queryParams.category || ''
    const min = queryParams.min && Number(queryParams.min) !== 0 ? Number(queryParams.min) : 0
    const max = queryParams.max && Number(queryParams.max) !== 0 ? Number(queryParams.max) : 0
    const categoryFilter = category && category != 'undefined' ? {category} : {}
    const priceFilter = min && max ? {price: {$gte: min, $lte: max}} : {}

    const sortOrder =
        order === 'lowest'
            ? {price: 1}
            : order === 'highest'
                ? {price: -1}
                : order === 'category'
                    ? {category: -1}
                    : {_id: -1}

    return {
      items: await Product.find({...categoryFilter, ...priceFilter}).limit(+limit).skip(+(limit * (page - 1))).sort(sortOrder),
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
