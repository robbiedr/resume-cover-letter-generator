import { Elysia } from "elysia";
import { createYoga, createSchema } from "graphql-yoga";
import { typeDefs } from "./graphql/schema";
import { resolvers } from "./graphql/resolvers";

const schema = createSchema({ typeDefs, resolvers });
const yoga = createYoga({ schema });

export const app = new Elysia()
  .get("/", () => "Hello, Bun!")
  .all("/graphql", async ({ request }) => yoga.handle(request));
