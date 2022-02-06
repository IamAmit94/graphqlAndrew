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
const typeDefs = `
type Query {
  greeting(name: String): String!
  add(numbers:[Float!]!): Float!
  grades:[Int!]!
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
    add(parents, args, ctx, info) {
      if (args.numbers.length === 0) {
        return 0;
      }
      //[1,5,10,2]
      else
        return args.numbers.reduce((accumulator, currentValue) => {
          return accumulator + currentValue;
        });
      // 1st time it run will give accumulator = 1 , currentVal = 5 , return =6
      // 2nd time accumulator = 6 ,currentVal =10, return = 16
      // 3rd time accumulator = 16 , currentVal = 2, return = 18
    },
    greeting(parents, args, ctx, info) {
      console.log(args);
      if (args.name) {
        return `Hello, ${args.name}`;
      } else {
        return "Hello !";
      }
      // ctx-> context args-> containts the arguments for all the values provided
      return "Hello !";
    },
    grades(parents, args, ctx, info) {
      return [10, 60, 70, 50, 90];
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
