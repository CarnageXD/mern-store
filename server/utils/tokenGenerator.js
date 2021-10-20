const jwt = require('jsonwebtoken')
const config = require('config')

function tokenGenerator(id, role) {
    const payload = {
        id,
        role,
    }
    return jwt.sign(payload, config.get('SECRET'), {expiresIn: 60})
}

module.exports = tokenGenerator