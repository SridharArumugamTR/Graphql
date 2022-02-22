const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`

  # This "Book" type defines query: 'title' and 'author'.
  type List {
    name: String
    sport: String
  }
  type Book {
    title: String
    author: String
  }
  

  # The "Query" type lists all of the available queries
  type Query {
    lists: [List]
    books: [Book]
  }

`;

const resolvers = {
  Query: {
    lists: () => lists,
    books: () => books,
  },
};

const lists = [
  {
    name: 'Virat Kohli',
    sport: 'Cricket',
  },
  {
    name: 'Sebastian Vettel',
    sport: 'Formula 1',
  },
  {
    name: 'Rafael Nadal',
    sport: 'Tennis',
  },
];

const books = [
  {
    title: 'Harry potter',
    author: 'J.K. Rowling',
  },
  {
    title: 'The Shining',
    author: 'Stephen King',
  },
];


const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});