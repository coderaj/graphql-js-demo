const fs = require("fs");
const path = require("path");
const express = require("express");
const graphqlHTTP = require("express-graphql");
const { makeExecutableSchema } = require("graphql-tools");

const schemaFile = path.join(__dirname, "app-schema.graphql");
const typeDefs = fs.readFileSync(schemaFile, "utf8");

// data files
var { getProjects } = require("./data/project.js");
var { getUsers } = require("./data/user");
var { getContracts } = require("./data/contract");
var { getDocuments } = require("./data/document.js");

var cors = require("cors");

const resolvers = {
  Query: {
      projects: () => getProjects(),
      users: () => getUsers(),
      project: (_, { id }) => getProjects().find(p => p.id == id),
  },

  Project: {
      id: project => project.id,
      name: project => project.name,
      contracts: c => getContracts().filter(contract => contract.projectId == c.id),
      documents: d => getDocuments().filter(document => document.projectId == d.id)
  },

  Contract: {
     id: contract => contract.id,
     name: contract => contract.name,
     documents: d => getDocuments().filter(document => document.contractId == d.id)
  }
};

// pass the resolver map as second argument
const schema = makeExecutableSchema({ typeDefs, resolvers });

var app = express();
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
);
app.listen(4000);
console.log("Running a GraphQL API server at localhost:4000/graphql");

// query with list CHECK
// query with param, CHECK
// mutator, CREATE, DELETE, UPDATE , CHECK

module.exports = app;