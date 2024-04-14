const express = require("express");
const dotenv = require("dotenv");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

dotenv.config();
const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URI;
const app = express();
app.use(cors());
mongoose.connect(MONGO_URL, console.log("mongodb connected successfully"));
app.listen(PORT, console.log("server listening on port 8800"));
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);
