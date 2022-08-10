const { model, Schema } = require('mongoose')

const User = new Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    ticketIds: { type: [String], default: [] },
    projectIds: { type: [String], default: [] },
    position: { type: String, required: true },
    //token - to be made at server then sends it as a response to be use for authenticate requests
})

module.exports = model('User', User)
