const UserModel = require(`../../model/user.model`)

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
                position,
            }: { name: string; password: string; position: string }
        ) {
            try {
                const user = new UserModel({
                    name,
                    password,
                    position,
                })
                await user.save()
                return user
            } catch (e) {
                throw new Error(e)
            }
        },
    },
}
