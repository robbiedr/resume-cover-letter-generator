import { Elysia } from "elysia";
import { createYoga, createSchema } from "graphql-yoga";

// Define GraphQL schema
const schema = createSchema({
  typeDefs: `
    type Query {
      hello: String
    }
  `,
  resolvers: {
    Query: {
      hello: () => "Hello from GraphQL!",
    },
  },
});

// Create the Yoga GraphQL handler
const yoga = createYoga({ schema });

const app = new Elysia()
  .get("/", () => "Hello, Bun!") // Basic test route

  // Handle GraphQL requests
  .all("/graphql", async ({ request }) => {
    return yoga.handle(request);
  })

  .listen(3000);

console.log(`🚀 Server running at http://localhost:3000`);
console.log(`📡 GraphQL available at http://localhost:3000/graphql`);
