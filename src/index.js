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

// Passing the data from client to server
// Type Defination (schema)

// Demo USer data
const users = [
  {
    id: "1",
    name: "Krishna",
    email: "new@email.com",
    age: "20",
  },
  {
    id: "2",
    name: "Keshava",
    email: "new1@email.com",
    age: "21",
  },
  {
    id: "3",
    name: "Radha",
    email: "new2@email.com",
    age: "22",
  },
];

// Dummy post Data
const post = [
  {
    id: "1",
    title: "new Title",
    body: " new data added",
    published: true,
  },
  {
    id: "2",
    title: "JavaScript",
    body: " new data updated",
    published: true,
  },
  {
    id: "3",
    title: "graphql",
    body: "  ",
    published: false,
  },
];
const typeDefs = `
type Query {
    posts(query: String): [Post!]!
    users(query: String): [User!]!
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
    users(parents, args, ctx, info) {
      // return users;
      if (!args.query) {
        return users;
      }
      return users.filter((user) => {
        return user.name.toLowerCase().includes(args.query.toLowerCase());
      });
    },
    posts(parents, args, ctx, info) {
      if (!args.query) {
        return post;
      }
      return posts.filter((post) => {
        const isTitleMatch = post.title
          .toLowerCase()
          .includes(args.query.toLowerCase());
        const isBodyMatch = post.title
          .toLowerCase()
          .includes(args.query.toLowerCase());
        return isTitleMatch || isBodyMatch;
      });
    },
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
