const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    firstName: String
    lastName: String
    phone: String
  }

  type Query {
    getUser(id: ID!): User
    getUsers: [User]
  }

  type Mutation {
    createUser(email: String!, firstName: String, lastName: String, phone: String): User
    updateUser(id: ID!, email: String, firstName: String, lastName: String, phone: String): User
    deleteUser(id: ID!): User
  }
`;

module.exports = typeDefs;
