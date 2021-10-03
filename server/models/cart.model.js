const {Schema, model, Types} = require('mongoose')

const CartSchema = new Schema({
    userId: {type: Types.ObjectId, ref: 'User'},
    products: [{
        productId: {type: Types.ObjectId, ref: 'Product'},
        quantity: {type: Number, required: true, min: [1, 'Quantity can not be less then 1'], default: 1},
        total: {type: Number, required: true, default: 1},
    }]
})

module.exports = model('Cart', CartSchema)