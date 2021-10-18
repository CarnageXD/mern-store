const User = require('./../models/user.model')
const Role = require('./../models/role.model')
const bcrypt = require('bcryptjs')
const tokenGenerator = require('./../utils/tokenGenerator')

class AuthService {
    async register({email, password, name}) {
        const candidate = await User.findOne({email})
        if (candidate) throw new Error('This email is already exists')
        const hashedPassword = await bcrypt.hash(password, 12)
        const userRole = await Role.findOne({value: "USER"})
        await User.create({name, email, password: hashedPassword, roles: [userRole.value]})
    }

    async login({email, password}) {
        const user = await User.findOne({email})
        console.log(user)
        if (!user) {
            throw new Error('User is not exists')
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            throw new Error('Wrong password, try again ')
        }

        if (user && isMatch) {
            const token = tokenGenerator(user._id, user.roles, user.name)

            return {token, name: user.name, id: user._id, roles: user.roles}
        }
    }
}

module.exports = new AuthService()