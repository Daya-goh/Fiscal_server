const express = require("express");
const budget = require("../models/budgetSchema");
const router = express.Router();

router.get("/", async (req, res) => {
  const budgetData = await budget.find();
  if (budgetData) {
    res.status(200).send(budgetData);
  } else {
    res.status(400).send({ msg: "cannot retrieve data" });
  }
});

module.exports = router;
