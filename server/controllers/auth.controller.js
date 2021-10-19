const AuthService = require('../services/auth.service')

class AuthController {
    async register(req, res) {
        try {
            await AuthService.register(req.body)
            return res.status(201).json({message: 'User has been created'})
        } catch (e) {
            res.status(500).json({message: e.message})
        }
    }

    async login(req, res) {
        try {
            const authData = await AuthService.login(req.body)
            return res.json({...authData})
        } catch (e) {
            res.status(500).json({message: e.message})
        }
    }
}

module.exports = new AuthController()