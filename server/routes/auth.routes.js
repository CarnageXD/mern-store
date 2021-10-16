const Router = require('express')
const AuthController = require('../controllers/auth.controller')
const { validationRules, validate } = require('../utils/validator.js')

const router = Router()

router.post('/register', validationRules.register, validate, AuthController.register)
router.post('/login', validationRules.login, validate, AuthController.login)

module.exports = router