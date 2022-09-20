const express = require("express");
const Budget = require("../models/budgetSchema");
const router = express.Router();

/* ----------------------- create seed data ----------------------- */

// router.get("/seed", async (req, res) => {
//   const budgetData = [
//     {
//       user_id: "",
//       income: [{ title: "salary", amount: 4500 }],
//       fixedExpenditure: [
//         { title: "hospitalisation ins", amount: 50 },
//         { title: "phone install", amount: 90 },
//         { title: "personal accident", amount: 100 },
//         { title: "house install", amount: 800 },
//       ],
//       savings: [{ title: "savings", amount: "1500" }],
//       allowance: 1960,
//       active: true,
//       recurring: true,
//     },
//   ];
//   Budget.deleteMany();

//   const result = await Budget.insertMany(budgetData);
//   res.send(result);
// });

/* ------------------------ get budget data ----------------------- */
router.get("/active", async (req, res) => {
  const activeBudget = await Budget.find({ active: true });
  if (activeBudget === null) {
    res.status(400).send({ msg: "Active budget not found" });
  } else {
    res.status(200).send(activeBudget);
  }
});

/* ----------------- update budget active to false ---------------- */

/* ------------------------ send new budget ----------------------- */

module.exports = router;
