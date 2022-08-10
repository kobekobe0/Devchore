const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

//------------------------------//

const mongoose = require('mongoose')
const { ApolloServer } = require('apollo-server')

const port = process.env.PORT || 3000
const uri =
    process.env.MONGODB_URI ||
    'mongodb+srv://kobekoblanca:Chixxmagnet00@cluster0.kcbgjsu.mongodb.net/Choredev?retryWrites=true&w=majority'

const typeDefs = require('./graphql/typedefs')
const resolvers = require('./graphql/resolvers')

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    context: ({ req }) => ({ req }),
})

mongoose
    .connect(uri, { useNewUrlParser: true })
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch((err) => {
        console.log('Error connecting to MongoDB: ', err.message)
    })
server.listen(port).then(() => {
    console.log(`Server ready at ${port}`)
})
