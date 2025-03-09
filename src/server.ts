import { app } from "./app";

app.listen(3000, () => {
  console.log(`🚀 Server running at http://localhost:3000`);
  console.log(`📡 GraphQL available at http://localhost:3000/graphql`);
});
