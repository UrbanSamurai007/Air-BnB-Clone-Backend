const { ApolloServer } = require("apollo-server-express");
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const TypeDefs = require("./schema");
const Resolvers = require("./resolvers");
const PORT = 3000;

const mdbUserName = "Camp518";
const mdbPassword = "matthew007";
const mdbCollection = "101289518_comp3133_assig1";
const mdbConnection = `mongodb+srv://${mdbUserName}:${mdbPassword}@cluster0.av8da.mongodb.net/${mdbCollection}?retryWrites=true&w=majority`;

mongoose.Promise = global.Promise;

const connect = mongoose
  .connect(mdbConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Connected to ${mdbCollection} on MongoDB`);
  })
  .catch((error) => {
    console.error("--- MONGODB CONNECTION ERROR: " + error + " ---");
  });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("*", cors());

const server = new ApolloServer({
  typeDefs: TypeDefs.typeDefs,
  resolvers: Resolvers.resolvers,
});

server.applyMiddleware({ app });

app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT: ${PORT}`);
});
