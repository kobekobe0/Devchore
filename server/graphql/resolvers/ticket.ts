export {}
const TicketModel = require('../../model/ticket.model')
const ProjectModel = require('../../model/project.model')
module.exports = {
    Query: {
        async getTickets() {
            try {
                return await TicketModel.find()
            } catch (e) {
                throw new Error('Error getting tickets: ' + e)
            }
        },
        async getTicket(_: null, { _id }: { _id: string }) {
            try {
                return await TicketModel.findById(_id)
            } catch (e) {
                throw new Error('Error getting ticket: ' + e)
            }
        },
        async getTicketsByProject(
            _: null,
            { projectId }: { projectId: string }
        ) {
            try {
                return await TicketModel.find({ projectId })
            } catch (e) {
                throw new Error('Error getting tickets: ' + e)
            }
        },
    },

    Mutation: {
        async createTicket(
            _: null,
            {
                projectId,
                title,
                userId,
                status,
                priority,
                description,
            }: {
                projectId: string
                title: string
                userId: string
                status: string
                priority: string
                description: string
            },
            context
        ) {
            try {
                const project = ProjectModel.findById(projectId)
                if (!project) throw new Error('Project not found')
                const ticket = new TicketModel({
                    projectId,
                    title,
                    createdBy: userId,
                    status,
                    priority,
                    description,
                    createdAt: new Date().toISOString(),
                })
                await ticket.save()
                return ticket
            } catch (e) {
                throw new Error('Error creating ticket: ' + e)
            }
        },
        async editTicket(
            _: null,
            {
                ticketId,
                description,
                title,
            }: { ticketId: string; description: string; title: string },
            context
        ) {
            try {
                const ticket = await TicketModel.findById(ticketId)
                if (!ticket) throw new Error('Ticket not found')
                if (description) ticket.description = description
                if (title) ticket.title = title
                await ticket.save()
                return ticket
            } catch (e) {
                throw new Error('Error editing ticket: ' + e)
            }
        },
        async commentTicket(
            _: null,
            {
                ticketId,
                body,
                userId,
            }: { ticketId: string; body: string; userId: string },
            context
        ) {
            try {
                const ticket = await TicketModel.findById(ticketId)
                if (!ticket) throw new Error('Ticket not found')
                ticket.comments.push({
                    body: body,
                    userId: userId,
                    createdAt: new Date().toISOString(),
                })
                await ticket.save()
                return ticket.comments[ticket.comments.length - 1]
            } catch (e) {
                throw new Error('Error commenting ticket: ' + e)
            }
        },
        async assignTicket(
            _: null,
            {
                ticketId,
                assigner,
                assignee,
            }: { ticketId: string; assigner: string; assignee: string },
            context
        ) {
            try {
                //check if user is in project
                //check if assigner is an admin
                const ticket = await TicketModel.findById(ticketId)
                if (!ticket) throw new Error('Ticket not found')

                const project = await ProjectModel.findById(ticket.projectId)
                if (!project) throw new Error('Project not found')
                if (
                    !project.members.find(
                        (member) => member.userId === assignee
                    )
                )
                    throw new Error('User not in project')

                const role = project.members.find(
                    (member) => member.userId === assigner
                ).role
                if (role !== 1) throw new Error('User not an admin')

                ticket.handlers.push(assignee)
                await ticket.save()
                return ticket
            } catch (e) {
                throw new Error('Error assigning ticket: ' + e)
            }
        },

        async deleteCommentTicket(
            _: null,
            { ticketId, commentId }: { ticketId: string; commentId: string },
            context
        ) {
            try {
                const ticket = await TicketModel.findByIdAndUpdate(ticketId, {
                    $pull: {
                        comments: { _id: commentId },
                    },
                })

                return true
            } catch (e) {
                throw new Error('Error deleting comment: ' + e)
            }
        },

        async deleteTicket(
            _: null,
            { ticketId, userId }: { ticketId: string; userId: string },
            context
        ) {
            //make a helper function to check if user owns something
            try {
                const ticket = await TicketModel.findById(ticketId)
                if (!ticket) throw new Error('Ticket not found')
                if (ticket.createdBy !== userId)
                    throw new Error('User is not authorized')
                await ticket.remove()
                return true
            } catch (e) {
                throw new Error('Error deleting ticket: ' + e)
            }
        },

        async ownTicket(
            _: null,
            { ticketId, userId }: { ticketId: string; userId: string },
            context
        ) {
            try {
                const ticket = await TicketModel.findById(ticketId)
                if (!ticket) throw new Error('Ticket not found')

                const project = await ProjectModel.findById(ticket.projectId)
                if (!project.members.find((member) => member.userId === userId))
                    throw new Error('User not in project')

                if (!ticket.handlers.find((handler) => handler === userId))
                    throw new Error('User already handling the ticket')
                ticket.handlers.push(userId)
                await ticket.save()

                return ticket
            } catch (e) {
                throw new Error('Error checking ownership: ' + e)
            }
        },

        async dropTicket(
            _: null,
            { ticketId, userId }: { ticketId: string; userId: string },
            context
        ) {
            //check if user is handler of the ticket
            try {
                const ticket = await TicketModel.findById(ticketId)
                if (!ticket) throw new Error('Ticket not found')
                if (!ticket.handlers.find((handler) => handler === userId))
                    throw new Error('User not handling the ticket')
                ticket.handlers = ticket.handlers.filter(
                    (handler) => handler !== userId
                )
                await ticket.save()
                return ticket
            } catch (e) {}
        },
    },
}
