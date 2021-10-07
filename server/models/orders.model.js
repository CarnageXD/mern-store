const {Schema, model, Types} = require('mongoose')

const OrderSchema = new Schema({
    userId: {type: Types.ObjectId, ref: 'User'},
    products:[
        {
            product: {type: Types.ObjectId, ref: 'Product'},
            quantity: {type: Number, required: true},
            total: {type: Number, required: true}
        },
    ],
    orderTime: {type: Date, default: Date.now}

})

module.exports = model('Order', OrderSchema)