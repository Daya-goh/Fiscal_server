require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT ?? 4856;
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const mongoose = require("mongoose");
// const <schema file name> = require("<path to schema>");
const ExpenseRoute = require("./controllers/expenseSeed");
const CategoryRoute = require("./controllers/categorySeed");
const TransactionRoute = require("./controllers/transaction");
const Budget = require("./models/budgetSchema");
const BudgetRoute = require("./controllers/budgetSeed");
const budgetController = require("./controllers/reBudgetSeed"); 

const MONGO_URI =
  "mongodb+srv://adminfiscal:Passwordfiscal123!@fiscal.q0rwl6l.mongodb.net/test";
//* Adding in userController
const userController = require("./controllers/UserController");
const User = require("./models/UserSchema");
const analysisController = require("./controllers/AnalysisController");

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
app.use("/analysis", analysisController);
app.use("/budget", BudgetRoute);
app.use("/rebudget", budgetController); 

/* ------------------------------------------------------ */
app.get("/", (req, res) => {
  res.status(200).send("Hi World!");
});

const isUser = async (req, res, next) => {
  const bearer = req.get("Authorization"); 
  const token = bearer.split(" ")[1]; 

  try {
    const payload = jwt.verify(token, SECRET); 
    const user = await User.findById(payload.userid); 

    if( user === null ){
      res.status(401).send("No entry")
    } else {
      next(); 
    }
  } catch (error) {
    res.status(401).send({ error }); 
  }
}


//* BudgetPage
app.get("/personal/budget", (req, res) => {
  res.status(200).send("Hi, You are now in Budget Page");
});

//* For LOGIN
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (user === null) {
    res.status(401).send({ error: "No such user found." });
  } else if (bcrypt.compareSync(password, user.password)) {
    const userid = user._id;
    const username = user.username;
    const payload = { userid, username };
    const token = jwt.sign(payload, SECRET, { expiresIn: "24h" });
    res.status(200).send({ msg: "Login successful.", token, userid });
  } else {
    res.status(401).send({ error: "Wrong password." });
  }
});

/* ------------------------------------------------------ */
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
