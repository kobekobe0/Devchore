export {}
const { model, Schema } = require('mongoose')

const Ticket = new Schema({
    description: { type: String, required: true },
    projectId: { type: String, required: true },
    comments: {
        type: [{ userId: String, body: String, createdAt: String }],
        default: [],
    },
    handlers: { type: [String], required: true },
    title: { type: String, required: true },
    createdBy: { type: String, required: true },
    status: { type: String, required: true },
    priority: { type: String, required: true },
    createdAt: { type: String, required: true },
    deleted: { type: Boolean, default: false },
})

module.exports = model('Ticket', Ticket)
