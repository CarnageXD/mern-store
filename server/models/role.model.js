const {Schema, model, Types} = require('mongoose')

const RoleSchema = new Schema({
    value: {type: String, unique: true, default: "USER"}
})

module.exports = model('Role', RoleSchema)