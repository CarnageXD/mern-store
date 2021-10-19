const User = require('./../models/user.model')
const bcrypt = require('bcryptjs')
const tokenGenerator = require('./../utils/tokenGenerator')

class AuthService {
    async register({email, password, name, role}) {
        const candidate = await User.findOne({email})
        if (candidate) throw new Error('This email is already exists')
        const hashedPassword = await bcrypt.hash(password, 12)
        await User.create({name, email, password: hashedPassword, role})
    }

    async login({email, password}) {
        const user = await User.findOne({email})
        if (!user) {
            throw new Error('User is not exists')
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            throw new Error('Wrong password, try again ')
        }

        if (user && isMatch) {
            const token = tokenGenerator(user._id, user.role, user.name)

            return {token, name: user.name, id: user._id, role: user.role}
        }
    }
}

module.exports = new AuthService()