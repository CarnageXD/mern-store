const jwt = require('jsonwebtoken')

function tokenGenerator(id, role, name) {
    const payload = {
        id,
        role,
        name,
    }
    return jwt.sign(payload, process.env.SECRET, {expiresIn: '1m'})
}

module.exports = tokenGenerator