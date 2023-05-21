const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    savedBooks: [Book]
    bookCount: Int
  }

  type Book {
    _id: ID!
    bookId: String
    authors: [String]
    desription: String
    image: String
    link: String
    title: String
  }

  input savedBook {
    bookId: String
    authors: [String]
    desription: String
    image: String
    link: String
    title: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(input: savedBook!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
