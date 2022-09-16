require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT ?? 4000;

const mongoose = require("mongoose");
// const <schema file name> = require("<path to schema>");

const MONGO_URI = process.env.MONGO_URI ?? "mongodb://localhost:27017/fiscal";
mongoose.connect(MONGO_URI);
mongoose.connection.once("open", () => {
  console.log(`connected to mongo at ${MONGO_URI}`);
});

// all middleware -> app.use
app.use(express.json());

/* ------------------------------------------------------ */
app.get("/", (req, res) => {
  res.status(200).send("Hi World!");
});

/* ------------------------------------------------------ */
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Define callback functions for various events mongoose
db.on("error", (err) => console.log(err.message + " is Mongodb not running?"));
db.on("connected", () => console.log("mongo connected: ", mongo_URI));
db.on("disconnected", () => console.log("mongo disconnected"));
