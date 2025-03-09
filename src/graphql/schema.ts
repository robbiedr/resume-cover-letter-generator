export const typeDefs = `
  type Query {
    hello: String
  }

  type Mutation {
    generateResume(name: String!, title: String!, experience: [String!]!): String
    generateCoverLetter(name: String!, position: String!, company: String!): String
  }
`;
