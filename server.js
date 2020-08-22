// The reference implementation of a GraphQL API server over an Express webserver. 
// You can use this to run GraphQL in conjunction with a regular Express webserver, 
// or as a standalone GraphQL server.

var express = require('express')
var { graphqlHTTP } = require('express-graphql')
var { buildSchema } = require('graphql')
const { type } = require('os')

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = { hello: () => 'Heloo world!' }

var app = express()
app.use('/graphql', graphqlHTTP({
	schema: schema,
	rootValue: root,
	graphiql: true,
}))
app.listen(4000, () => console.log('Now browse to http://localhost:4000/graphql'))
