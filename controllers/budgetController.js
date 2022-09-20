const express = require("express");
const Budget = require("../models/budgetSchema");
const router = express.Router();

//* Get Budget Data
router.get("/", async (req, res) => {
  const budgetData = await Budget.find();
  if (budgetData) {
    res.status(200).send(budgetData);
  } else {
    res.status(400).send({ msg: "cannot retrieve data" });
  }
});

module.exports = router;

//* Create new budget data
router.post("/", async (req, res) => {
  const newBudget = req.body;
  Budget.create(newBudget, (error, newBudget) => {
    if (error) {
      res.status(500).send({ msg: "cannot add budget" });
    } else {
      res.status(200).send(newBudget);
    }
  });
});
