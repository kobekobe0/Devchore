export {}
const { model, Schema } = require('mongoose')

const Ticket = new Schema({
    description: { type: String, required: true },
    projectId: { type: String, required: true },
    comments: {
        type: [{ userId: String, body: String, createdAt: String }],
        default: [],
    },
    handlers: { type: [String], default: [] },
    status: { type: String, required: true },
    priority: { type: String, required: true },
    createdAt: { type: String, required: true },
})

module.exports = model('Ticket', Ticket)
