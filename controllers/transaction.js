const express = require("express");
const Expense = require("../models/expenseSchema");
const router = express.Router();

/* ----------------------- get expense data ----------------------- */
router.get("/", async (req, res) => {
  const transactionData = await Expense.find().populate("category");
  res.status(200).send(transactionData);
});

/* ------------------- get transaction by month ------------------- */
router.get("/:id", async (req, res) => {
  const id = new Date().getMonth() + 1;
  const transactionData = await Expense.find({
    date: { $gte: `2022-${id}-01`, $lte: `2022-${id}-31` },
  }).populate("category");
  res.status(200).send(transactionData);
});

module.exports = router;
