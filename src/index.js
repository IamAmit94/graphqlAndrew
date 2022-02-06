import { GraphQLServer } from "graphql-yoga";

const typeDefs = `
type Query {
    hello: String!
    name: String!
    location: String!
}`;

// Resolvers
const resolvers = {
  Query: {
    hello() {
      return "This is my first Query!";
    },
    name() {
      return "My name is Amit !";
    },
    location() {
      return " I live in chandigarh !";
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
