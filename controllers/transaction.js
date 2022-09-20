const { getYear } = require("date-fns");
const express = require("express");
const Expense = require("../models/expenseSchema");
const router = express.Router();

/* ----------------------- get expense data ----------------------- */
router.get("/", async (req, res) => {
  const transactionData = await Expense.find().populate("category");
  res.status(200).send(transactionData);
});

router.get("/", async (req, res) => {
  const transactionData = await Expense.find().populate("category");
  res.status(200).send(transactionData);
});

router.get("/today", async (req, res) => {
  const todayTransaction = await Expense.find({
    date: new Date().toLocaleDateString("en-CA"),
  });
  res.send(todayTransaction);
});

/* ------------------- get transaction by month ------------------- */
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const year = getYear(new Date());
  const transactionData = await Expense.find({
    date: { $gte: `${year}-${id}-01`, $lte: `${year}-${id}-31` },
  }).populate("category");
  res.status(200).send(transactionData);
});
//expense/:id

module.exports = router;
