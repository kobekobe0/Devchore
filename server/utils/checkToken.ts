export {}
const jwt = require('jsonwebtoken')
const { AuthenticationError } = require('apollo-server')
const secretKey = 'retardedtypeofthoughts' //should be super secret

//cintext contains the header
//in fe set authorization headers to jwt token
module.exports = (context) => {
    const authHeader = context.req.headers.authorization
    if (!authHeader) {
        throw new Error('No auth token found')
    }
    try {
        const decoded = jwt.verify(authHeader, secretKey)
        return decoded
    } catch (e) {
        throw new AuthenticationError('Invalid token')
    }
}
