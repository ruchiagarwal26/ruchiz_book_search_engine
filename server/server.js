const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const { authMiddleware } = require('./utils/auth');

const { typeDefs, resolver } = require('./schemas');
const db = require('./config/connection');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(routes);

const server = new ApolloServer({
  typeDefs,
  resolver,
  context: authMiddleware,
});

async function startApolloServer() {
  await server.start();
  server.applyMiddleware({ app });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });
  db.on("error", (err) => {
    console.error("MongoDB connection error: ", err);
  });
}

startApolloServer();
