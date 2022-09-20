const express = require("express");
const Expense = require("../models/expenseSchema");
const router = express.Router();

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
    router.get("/month/:id", async (req, res) => {
    const { id } = req.params;
    const year = id.split("-")[0]; 
    const month = id.split("-")[1]
    const monthData = await Expense.find({
        date: { $gte: `${year}-${month}-01`, $lte: `${year}-${month}-31` },
    }).populate("category");
    res.status(200).json(monthData);
    });


// SHOW - Get expenses data by YEAR (for Client side "/expenses/year")
    router.get("/year/:id", async (req, res) => {
        const { id } = req.params;
        const yearData = await Expense.find({
        date: { $gte: `${id}-01-01`, $lte: `${id}-12-31` },
        }).populate("category");
        res.status(200).json(yearData);
    });

module.exports = router;