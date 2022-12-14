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
        createdBy: ID
        title: String
        deleted: Boolean
    }

    type Query {
        getUsers: [User]
        getUser(_id: ID!): User
        getUserProjects: [Project]
        getProject(_id: ID!): Project
        getProjectMembers(projectId: ID!): [Roles]
        getTickets: [Ticket]
        getTicket(_id: ID!): Ticket
        getTicketsByProject(projectId: ID!): [Ticket]
        getUserTickets: [Ticket]
        getUserTicket(ticketId: String!): Ticket
    }

    type Mutation {
        createUser(
            name: String!
            password: String!
            confirmPassword: String!
            position: String!
        ): User
        login(name: String!, password: String!): String

        createProject(title: String!): Project!
        editProject(id: ID!, title: String): Project!
        addMember(projectId: ID!, userId: ID!, role: Int!): Project!
        removeMember(projectId: ID!, userId: ID!): Project!
        joinProject(code: String!): Project!
        commentProject(projectId: ID!, body: String!): Comment!
        deleteCommentProject(projectId: ID!, commentId: ID!): Project!
        deleteProject(projectId: ID!): Boolean!

        createTicket(
            projectId: ID!
            title: String!
            status: String!
            handlers: [String!]
            priority: String!
            description: String!
        ): Ticket!
        editTicket(ticketId: ID!, description: String, title: String): Ticket!
        deleteTicket(ticketId: ID!): Boolean!
        commentTicket(ticketId: ID!, body: String!): Comment!
        deleteCommentTicket(ticketId: ID!, commentId: ID!): Boolean!
        assignTicket(ticketId: ID!, assignee: ID!): Ticket!
        ownTicket(ticketId: ID!): Ticket!
        dropTicket(ticketId: ID!): Ticket!
    }
`

//Project.members should use Roles type ids
