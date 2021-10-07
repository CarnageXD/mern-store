const {Schema, model, Types} = require('mongoose')

const OrdersSchema = new Schema({
    userId: {type: Types.ObjectId, ref: 'User'},
    orders: [{
        cart: {type: Types.ObjectId, ref: 'Cart'},
        orderTime: {type: Date, default: Date.now}
    }]

})

module.exports = model('Orders', OrdersSchema)