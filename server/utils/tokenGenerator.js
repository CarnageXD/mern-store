const jwt = require('jsonwebtoken')

function tokenGenerator(id, role) {
    const payload = {
        id,
        role,
    }
    return jwt.sign(payload, process.env.SECRET, {expiresIn: 60})
}

module.exports = tokenGenerator