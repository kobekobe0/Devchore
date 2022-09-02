export {}
const TicketModel = require('../../model/ticket.model')
const ProjectModel = require('../../model/project.model')
const checkToken = require('../../utils/checkToken')
const checkProjectRole = require('../../utils/checkProjectRole')
module.exports = {
    Query: {
        async getTickets() {
            try {
                return await TicketModel.find({ deleted: false })
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
        async getUserTickets(_: null, __: null, context) {
            try {
                const user = checkToken(context)
                return await TicketModel.find({
                    deleted: false,
                    handlers: { $elemMatch: { handlers: user._id } },
                })
            } catch (e) {
                throw new Error("Failed fetching user's tickets")
            }
        },
        async getUserTicket(
            _: null,
            { ticketId }: { ticketId: string },
            context
        ) {
            try {
                const user = checkToken(context)
                const ticket = await TicketModel.findOne({
                    _id: ticketId,
                    deleted: false,
                })
                if (ticket.handlers!.includes(user._id))
                    throw new Error("You're not the owner of this ticket")
                return ticket
            } catch (e) {}
        },
        async getTicketsByProject(
            _: null,
            { projectId }: { projectId: string },
            context
        ) {
            try {
                checkToken(context)
                return await TicketModel.find({ projectId, deleted: false })
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
                status,
                priority,
                handlers,
                description,
            }: {
                projectId: string
                title: string
                status: string
                handlers: string[]
                priority: string
                description: string
            },
            context
        ) {
            try {
                const user = checkToken(context)
                const project = await ProjectModel.findById(projectId)
                const role = checkProjectRole(project?.members, user._id)
                if (!project) throw new Error('Project not found')
                if (role == 1) {
                    //pwede mag assign
                    const ticket = new TicketModel({
                        projectId,
                        title,
                        createdBy: user._id,
                        status: status.toUpperCase(),
                        priority: priority.toUpperCase(),
                        description,
                        handlers: handlers,
                        createdAt: new Date().toISOString(),
                    })
                    await ticket.save()
                    return ticket
                } else {
                    const ticket = new TicketModel({
                        projectId,
                        title,
                        createdBy: user._id,
                        status,
                        priority,
                        description,
                        handlers: [user._id],
                        createdAt: new Date().toISOString(),
                    })
                    await ticket.save()
                    return ticket
                }
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
                const user = checkToken(context)
                const ticket = await TicketModel.findById(ticketId)
                const project = await ProjectModel.findById(ticket.projectId)
                const role = checkProjectRole(project?.members, user._id)

                if (role !== 1)
                    throw new Error(
                        "You're not an authorized to update this ticket"
                    )
                if (!ticket) throw new Error('Ticket not found')
                if (description) ticket.description = description //if desc is not sent, don't update
                if (title) ticket.title = title //if title is not sent, don't update

                await ticket.save()
                return ticket
            } catch (e) {
                throw new Error('Error editing ticket: ' + e)
            }
        },
        async commentTicket(
            _: null,
            { ticketId, body }: { ticketId: string; body: string },
            context
        ) {
            try {
                const user = checkToken(context)
                const ticket = await TicketModel.findById(ticketId)
                const project = await ProjectModel.findById(ticket.projectId)
                checkProjectRole(project?.members, user._id) //checks if user is member

                if (!ticket) throw new Error('Ticket not found')
                ticket.comments.push({
                    body: body,
                    userId: user._id,
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
            { ticketId, assignee }: { ticketId: string; assignee: string },
            context
        ) {
            try {
                //check if assignee is member of the project
                const user = checkToken(context)

                const ticket = await TicketModel.findById(ticketId)
                if (!ticket) throw new Error('Ticket not found')

                const project = await ProjectModel.findById(ticket.projectId)
                if (!project) throw new Error('Project not found')

                const role = checkProjectRole(project?.members, user._id)
                if (role !== 1)
                    throw new Error("You're not authorized to assign handlers")

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
                const user = checkToken(context)

                const ticket = await TicketModel.findById(ticketId)
                const project = await ProjectModel.findById(ticket.projectId)
                const role = checkProjectRole(project?.members, user._id)

                if (role == 1) {
                    await TicketModel.findByIdAndUpdate(ticketId, {
                        $pull: {
                            comments: { _id: commentId },
                        },
                    })
                } else {
                    const comment = ticket.comments.find(
                        (comment) => comment._id == commentId
                    )

                    if (!comment) throw new Error("Can't find comment")
                    if (comment.userId !== user._id)
                        throw new Error("You're not the owner of this comment")

                    await TicketModel.findByIdAndUpdate(ticketId, {
                        $pull: {
                            comments: { _id: commentId },
                        },
                    })
                }

                return true
            } catch (e) {
                throw new Error('Error deleting comment: ' + e)
            }
        },

        async deleteTicket(
            _: null,
            { ticketId }: { ticketId: string },
            context
        ) {
            //make a helper function to check if user owns something
            try {
                const user = checkToken(context)
                const ticket = await TicketModel.findById(ticketId)
                if (!ticket) throw new Error('Ticket not found')
                const project = await ProjectModel.findById(ticket.projectId)
                const role = checkProjectRole(project?.members, user._id)
                if (ticket.createdBy !== user._id) {
                    if (role !== 1) throw new Error('User is not authorized')
                    throw new Error('User is not authorized')
                }

                ticket.deleted = true
                await ticket.save()
                return true
            } catch (e) {
                throw new Error('Error deleting ticket: ' + e)
            }
        },

        async ownTicket(_: null, { ticketId }: { ticketId: string }, context) {
            try {
                const user = checkToken(context)
                const ticket = await TicketModel.findById(ticketId)

                if (!ticket) throw new Error('Ticket not found')

                const project = await ProjectModel.findById(ticket.projectId)

                checkProjectRole(project.members, user._id) //checks if member

                if (ticket.handlers.find((handler) => handler === user._id))
                    throw new Error('User already handling the ticket')

                ticket.handlers.push(user._id)
                await ticket.save()

                return ticket
            } catch (e) {
                throw new Error('Error checking ownership: ' + e)
            }
        },

        async dropTicket(_: null, { ticketId }: { ticketId: string }, context) {
            //check if user is handler of the ticket
            try {
                const user = checkToken(context)
                const ticket = await TicketModel.findById(ticketId)

                if (!ticket) throw new Error('Ticket not found')
                if (!ticket.handlers.find((handler) => handler === user._id))
                    throw new Error('User not handling the ticket')
                ticket.handlers = ticket.handlers.filter(
                    (handler) => handler !== user._id
                )
                await ticket.save()
                return ticket
            } catch (e) {}
        },
    },
}
