const {check, validationResult} = require('express-validator')

const validationRules = {
    register: [
        check('email', 'Incorrect email').isEmail(),
        check('password', 'Minimum password characters is 6 symbols').isLength({min: 6}),
        check('name', 'Maximum name size is 36').isLength({max: 36}),
    ],
    login: [
        check('email', 'Incorrect email').normalizeEmail().isEmail(),
        check('password', 'Incorrect password, try again').exists()
    ]
}

const validate = (req, res, next) => {
    const errors = validationResult(req)

    if (errors.isEmpty()) {
        return next()
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({[err.param]: err.msg}))

    return res.status(400).json({
        errors: extractedErrors,
    })
}

module.exports = {validationRules, validate}