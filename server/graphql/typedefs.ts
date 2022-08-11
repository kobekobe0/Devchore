const { gql } = require('apollo-server')

module.exports = gql`
    type User {
        _id: ID
        name: String
        password: String
        ticketIds: [ID]
        projectIds: [ID]
        position: String
        token: String
    }

    type Roles {
        _id: ID
        userId: ID
        role: Int
    }

    type Comment {
        _id: ID
        userId: ID
        body: String
        createdAt: String
    }

    type Project {
        _id: ID
        createdBy: String
        title: String
        members: [Roles]
        ticketIds: [ID]
        comments: [Comment]
        createdAt: String
        code: String
    }

    type Ticket {
        _id: ID
        description: String
        projectId: ID
        comments: [Comment]
        handlers: [ID]
        status: String
        priority: String
        createdAt: String
    }

    type Query {
        getUsers: [User]
        getUser(_id: ID!): User
        getProjects: [Project]
        getProject(_id: ID!): Project
        getTickets: [Ticket]
        getTicket(_id: ID!): Ticket
    }

    type Mutation {
        createUser(name: String!, password: String!, position: String!): User

        createProject(userId: ID!, title: String!): Project!
        editProject(id: ID!, title: String): Project!
        addMember(projectId: ID!, userId: ID!, role: Int!): Project!
        removeMember(projectId: ID!, userId: ID!): Project!
        joinProject(userId: ID!, code: String!): Project!
        commentProject(projectId: ID!, body: String!, userId: ID!): Comment!
        deleteCommentProject(
            projectId: ID!
            commentId: ID!
            userId: ID!
        ): Comment!
        deleteProject(projectId: ID!, userId: ID!): Boolean!

        createTicket(
            projectId: ID!
            title: String!
            userId: ID!
            status: String!
            priority: String!
        ): Ticket!
        editTicket(ticketId: ID!, title: String!): Ticket!
        commentTicket(ticketId: ID!, body: String!, userId: String!): Comment!
        deleteCommentTicket(ticketId: ID!, commentId: ID!): Boolean!
        assignTicket(ticketId: ID!, assigner: ID!, assignee: ID!): Ticket!
        ownTicket(ticketId: ID!, userId: ID!): Ticket!
    }
`

//Project.members should use Roles type ids
