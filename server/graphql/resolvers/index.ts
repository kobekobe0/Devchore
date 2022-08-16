const userResolvers = require('./user')
const projectResolvers = require('./project')
const ticketResolvers = require('./ticket')

module.exports = {
    Query: {
        ...userResolvers.Query,
        ...projectResolvers.Query,
        ...ticketResolvers.Query,
    },

    Mutation: {
        ...userResolvers.Mutation,
        ...projectResolvers.Mutation,
        ...ticketResolvers.Mutation,
    },
}
