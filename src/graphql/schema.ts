export const typeDefs = `
  type ResponseWithCacheDetails {
    data: String!
    fromCache: Boolean!
    cacheDate: String
  }

  type Query {
    hello: String
  }

  type Mutation {
    generateAIResume(name: String!, title: String!, experience: [String!]!): ResponseWithCacheDetails!
    generateAICoverLetter(
      name: String!,
      position: String!,
      company: String!,
      skills: [String!],
      experience: Int
    ): ResponseWithCacheDetails!
  }
`;
