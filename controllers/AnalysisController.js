const express = require("express");
const Expense = require("../models/expenseSchema");
const router = express.Router();
const isUser = require("./middleware");
const { default: jwtDecode } = require("jwt-decode");
const { default: mongoose } = require("mongoose");

// INDEX - Get ALL expense data
router.get("/", async (req, res) => {
  const expenseData = await Expense.find().populate("category");
  res.status(200).send(expenseData);
});

router.get("/today", async (req, res) => {
  const todayTransaction = await Expense.find({
    date: new Date().toLocaleDateString("en-CA"),
  });
  res.send(todayTransaction);
});

// SHOW - Get expenses data by MONTH (for Client side "/expenses/month")
router.get("/month/:id", isUser, async (req, res) => {
  //* Getting the token
  const bearer = req.get("Authorization");
  console.log(bearer);
  const token = bearer.split(" ")[1];
  var decoded = jwtDecode(token);
  console.log(decoded);

  const { id } = req.params;
  const year = id.split("-")[0];
  const month = id.split("-")[1];
  const monthData = await Expense.find({
    user_id: mongoose.Types.ObjectId(decoded.userid),
    date: { $gte: `${year}-${month}-01`, $lte: `${year}-${month}-31` },
  }).populate("category");
  res.status(200).json(monthData);
});

// SHOW - Get expenses data by YEAR (for Client side "/expenses/year")
router.get("/year/:id", isUser, async (req, res) => {
  //* Getting the token
  const bearer = req.get("Authorization");
  const token = bearer.split(" ")[1];
  var decoded = jwtDecode(token);

  const { id } = req.params;
  const yearData = await Expense.find({
    user_id: mongoose.Types.ObjectId(decoded.userid),
    date: { $gte: `${id}-01-01`, $lte: `${id}-12-31` },
  }).populate("category");
  res.status(200).json(yearData);
});

module.exports = router;
