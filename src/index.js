import { GraphQLServer } from "graphql-yoga";

// GraphQl scaler types:-
/**
 * A scalar is a single dicrere value. It is type which store the sigle value. There are 5 built-in scalar types in graphQl:-
 * 1. ID: used to store the unique ID
 * 2. String: used to store true or false
 * 3. Boolean: used to store true or false
 * 4. Int: used to store 32 bit integer
 * 5. Float: used to store double-precison floating point numbers
 */

// Type Defination (schema)
const typeDefs = `
type Query {
    id: ID!
    name: String!
    age: Int!
    employeed: Boolean!
    gpa: Float

}`;

// Resolvers
const resolvers = {
  Query: {
    id() {
      return `123`;
    },
    name() {
      return `New Name`;
    },
    age() {
      return 20;
    },
    employeed() {
      return true;
    },
    gpa() {
      return 10.3;
    },
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

server.start(() => {
  console.log("Server is running !");
});
