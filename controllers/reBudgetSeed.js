const express = require("express");
const Rebudget = require("../models/reBudgetSchema");
const router = express.Router();
const isUser = require("./middleware");
const { default: jwtDecode } = require("jwt-decode");
const { default: mongoose } = require("mongoose");

/* ------------------ SEED data for Budget route ------------------ */
router.get("/seed", async (req, res) => {
  const budgetSeed = [
    {
      user_id: "632a97e01e3883e6777ccd26",
      income: 5000,
      fixedExpenditure: 1500,
      savings: 2000,
      allowance: 1500,
      active: true,
    },
  ];
  Rebudget.deleteMany();
  const result = await Rebudget.insertMany(budgetSeed);
  res.send(result);
});

/* -------------------------- budget log -------------------------- */
router.get("/", isUser, async (req, res) => {
  const bearer = req.get("Authorization");
  const token = bearer.split(" ")[1];
  var decoded = jwtDecode(token);

  try {
    const budget = await Rebudget.find({
      user_id: mongoose.Types.ObjectId(decoded.userid),
    });
    if (budget === null) {
      res.status(400).send({ msg: "cannot get budget" });
    } else {
      res.status(200).send(budget);
    }
  } catch (error) {
    res.status(500).send({ error });
  }
});

/* ----------------------- create new budget ---------------------- */
router.post("/create", async (req, res) => {
  const newBudget = req.body;

  try {
    Rebudget.create(newBudget, (error, newBudget) => {
      if (error) {
        res.status(500).send({ msg: "Fail to create budget" });
      } else {
        res.status(200).send(newBudget);
      }
    });
  } catch (error) {
    res.status(500).send({ error });
  }
});

/* ----------------- update old budget to inactive ---------------- */
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedInfo = req.body;

  try {
    const updateBudget = await Rebudget.findByIdAndUpdate(id, updatedInfo, {
      new: true,
    });
    if (updateBudget === null) {
      res.status(400).send({ msg: "cannot update budget" });
    }
    res.status(200).send(updateBudget);
  } catch (error) {
    res.status(500).send({ error });
  }
});

/* ----------------------- get active budget ---------------------- */
router.get("/active", async (req, res) => {
  //* Getting the token
  const bearer = req.get("Authorization");
  const token = bearer.split(" ")[1];

  var decoded = jwtDecode(token);
  console.log(decoded);
  try {
    const activeBudget = await Rebudget.find({
      user_id: mongoose.Types.ObjectId(decoded.userid),
      active: true,
    });
    if (activeBudget === null) {
      res.status(400).send({ msg: "Active budget not found" });
    } else {
      res.status(200).send(activeBudget);
    }
  } catch (error) {
    res.status(500).send({ error });
  }
});

module.exports = router;
