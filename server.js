require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT ?? 4856;
const ExpenseSeedController = require("./controllers/expenseSeed");

const mongoose = require("mongoose");
// const <schema file name> = require("<path to schema>");

const MONGO_URI =
  "mongodb+srv://adminfiscal:Passwordfiscal123!@fiscal.q0rwl6l.mongodb.net/test";
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

app.use("/expense", ExpenseSeedController);

/* ------------------------------------------------------ */
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
