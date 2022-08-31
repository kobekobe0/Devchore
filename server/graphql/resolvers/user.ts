const UserModel = require(`../../model/user.model`)

const bcrypt = require('bcrypt')
const saltRounds = 10

const jwt = require('jsonwebtoken')

const secretKey = 'retardedtypeofthoughts'

module.exports = {
    Query: {
        async getUsers() {
            return await UserModel.find()
        },
        async getUser(userId: string) {
            return await UserModel.findById(userId)
        },
    },
    Mutation: {
        async createUser(
            _: null,
            {
                name,
                password,
                confirmPassword,
                position,
            }: {
                name: string
                password: string
                confirmPassword: string
                position: string
            }
        ) {
            try {
                const exists = await UserModel.findOne({ name: name })
                if (exists) throw new Error('Someone already uses this name')

                if (password != confirmPassword)
                    throw new Error('Password did not match')

                const salt = bcrypt.genSaltSync(saltRounds)
                const hash = bcrypt.hashSync(password, salt)

                if (!hash || !salt)
                    throw new Error('Something went wrong hashing password')

                const user = new UserModel({
                    name,
                    password: hash,
                    position,
                })
                await user.save()
                return user
            } catch (e) {
                throw new Error(e)
            }
        },

        async login(
            _: null,
            { name, password }: { name: string; password: string }
        ) {
            try {
                const user = await UserModel.findOne({ name: name })
                if (!user) throw new Error("User didn't exists")

                const match = await bcrypt.compare(password, user.password)
                if (!match) throw new Error("Credentials didn't match")
                if (match) {
                    console.log('ff')
                    const token = jwt.sign(
                        {
                            _id: user._id,
                            name: user.name,
                        },
                        secretKey
                    )
                    console.log('gg')
                    console.log(token)
                    return token
                }
            } catch (e) {
                throw new Error(e)
            }
        },
    },
}
