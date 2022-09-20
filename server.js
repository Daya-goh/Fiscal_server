require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT ?? 4856;
const cors = require("cors");
const bcrypt = require("bcrypt");

const mongoose = require("mongoose");
// const <schema file name> = require("<path to schema>");
const ExpenseRoute = require("./controllers/expenseSeed");
const CategoryRoute = require("./controllers/categorySeed");
const TransactionRoute = require("./controllers/transaction");

const MONGO_URI =
  "mongodb+srv://adminfiscal:Passwordfiscal123!@fiscal.q0rwl6l.mongodb.net/test";
//* Adding in userController
const userController = require("./controllers/UserController");
const User = require("./models/UserSchema");
mongoose.connect(MONGO_URI);
mongoose.connection.once("open", () => {
  console.log(`connected to mongo at ${MONGO_URI}`);
});

// all middleware -> app.use
app.use(cors());
app.use(express.json());
app.use("/expense", ExpenseRoute);
app.use("/category", CategoryRoute);
app.use("/transactions", TransactionRoute);
app.use("/users", userController);

/* ------------------------------------------------------ */
app.get("/", (req, res) => {
  res.status(200).send("Hi World!");
});

//* For LOGIN
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (user === null) {
    res.status(401).send({ error: "No such user found." });
  } else if (bcrypt.compareSync(password, user.password)) {
    res.status(200).send({ msg: "Login successful." });
  } else {
    res.status(401).send({ error: "Wrong password." });
  }
});

/* ------------------------------------------------------ */
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
