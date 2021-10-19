const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    if (req.method === "OPTIONS") return next()

    try {
        const token = req.headers.authorization.split(' ')[1] //BEARER TOKEN
        if (!token) return res.status(403).json({message: 'No authorization'})
        const decodedData = jwt.decode(token, process.env.SECRET)
        if (decodedData) {
            req.user = decodedData
        } else return res.status(403).json({message: 'Session has been expired, logout and login again'})
        next()

    } catch (e) {
        return res.status(403).json({message: "No authorization"})
    }
}
