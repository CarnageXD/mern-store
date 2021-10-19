const {Schema, model, Types} = require('mongoose')

const UserSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, minlength: 6},
    role: {type: String, required: true},
    cart: {type: Types.ObjectId, ref: 'Cart'},
    orders: {type: Types.ObjectId, ref: 'Order'}
})

module.exports = model('User', UserSchema)