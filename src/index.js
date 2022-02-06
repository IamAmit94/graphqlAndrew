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
    me: User! 
    post: Post!
}

type User {
  id: ID!
  name: String!
  email: String!
  age: Int!
  }
  type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
    }
`;

// Resolvers
const resolvers = {
  Query: {
    me() {
      return {
        id: "123456",
        name: "Andrew",
        email: "alfa@email.com",
        age: 22,
      };
    },
    post() {
      return {
        id: "456132",
        title: "new Post",
        body: "Yet to be written",
        published: true,
      };
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
