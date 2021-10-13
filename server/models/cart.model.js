const {Schema, model, Types} = require('mongoose')

const CartSchema = new Schema({
    userId: {type: Types.ObjectId, ref: 'User'},
    products: [{
        product: {type: Types.ObjectId, ref: 'Product'},
        quantity: {type: Number, min: [1, 'Quantity can not be less then 1'], default: 1},
        total: {type: Number, default: 1},
        size: {type: String, required: true}
    }]
})

module.exports = model('Cart', CartSchema)