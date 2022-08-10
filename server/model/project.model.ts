export {}
const { model, Schema } = require('mongoose')

const generateCode = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let code = ''
    for (let i = 0; i < 8; i++) {
        code += chars[Math.floor(Math.random() * chars.length)]
    }
    return code
}

//ROLES
//1 - admin
//2 - member

const Project = new Schema({
    createdBy: { type: String, required: true },
    title: { type: String, required: true },
    members: { type: [{ userId: String, role: Number }], default: [] },
    ticketIds: { type: [String], default: [] },
    comments: {
        type: [{ userId: String, description: String, createdAt: String }],
        default: [],
    },
    createdAt: { type: String, required: true },
    code: { type: String, required: true, default: generateCode },
})

module.exports = model('Project', Project)
