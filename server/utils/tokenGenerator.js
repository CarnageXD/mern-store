const jwt = require('jsonwebtoken')

function tokenGenerator (id, roles, name) {
    const payload = {
        id,
        roles,
        name,
    }
    return jwt.sign(payload, process.env.SECRET, {expiresIn: '1h'})
}

module.exports = tokenGenerator