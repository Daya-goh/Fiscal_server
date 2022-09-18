require("dotenv").config();
//* dependencies
const express = require("express");
const mongoose = require("mongoose");
const Budget = require("./models/budgetSchema");

//* Configurations
const app = express();
const port = process.env.PORT ?? 4000;
const MONGO_URI = process.env.MONGO_URI ?? "mongodb://localhost:27017/fiscal";

mongoose.connect(MONGO_URI);
mongoose.connection.once("open", () => {
  console.log(`connected to mongo at ${MONGO_URI}`);
});

//* all middleware -> app.use
app.use(express.json());

/* ------------------------------------------------------ */
app.get("/", (req, res) => {
  res.status(200).send("Hi World!");
});

//* BudgetPage
app.get("/personal/budget", (req, res) => {
  res.status(200).send("Hi, You are now in Budget Page");
});

/* ------------------------------------------------------ */
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
