export const typeDefs = `
  type Query {
    hello: String
  }

  type Mutation {
    generateAIResume(name: String!, title: String!, experience: [String!]!): String
    generateAICoverLetter(
      name: String!,
      position: String!,
      company: String!,
      skills: [String!],
      experience: Int
    ): String!
  }
`;
