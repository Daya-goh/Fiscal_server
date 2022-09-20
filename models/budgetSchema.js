const mongoose = require("mongoose");

const budgetSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  income: [
    {
      title: { type: String, required: true },
      amount: { type: mongoose.Types.Decimal128, required: true },
    },
  ],
  fixedExpenditure: [
    {
      title: { type: String, required: true },
      amount: { type: mongoose.Types.Decimal128, required: true },
    },
  ],
  savings: [
    {
      title: { type: String, required: true },
      amount: { type: mongoose.Types.Decimal128, required: true },
    },
  ],
  allowance: { type: mongoose.Types.Decimal128, required: false },
  active: { type: Boolean, required: true },
  recurring: { type: Boolean, required: true },
});

const Budget = mongoose.model("Budget", budgetSchema);

module.exports = Budget;

//
