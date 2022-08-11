const userResolvers = require('./user')
const projectResolvers = require('./project')

module.exports = {
    Query: {
        ...userResolvers.Query,
        ...projectResolvers.Query,
    },

    Mutation: {
        ...userResolvers.Mutation,
        ...projectResolvers.Mutation,
    },
}
