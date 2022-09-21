const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reBudgetSchema = new Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  income: { type: Number, required: true },
  fixedExpenditure: { type: Number },
  savings: { type: Number },
  allowance: { type: Number },
  active: { type: Boolean },
});

const Rebudget = mongoose.model("Rebudget", reBudgetSchema);
module.exports = Rebudget;
