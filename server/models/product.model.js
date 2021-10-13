const {Schema, model} = require('mongoose')

const ProductSchema = new Schema({
    title: {type: String, required: true, unique: true},
    description: {type: String},
    price: {type: Number, required: true},
    category: {type: String, required: true},
    image: {type: String, required: true},
    sold: {type: Number, default: 0},
    sex: {type: String, required: true},
    sizes: {type: String, required: true}
})

module.exports = model('Product', ProductSchema)