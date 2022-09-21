const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
  // add your code here to set up your schema
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  budget_id: { type: mongoose.Schema.Types.ObjectId, ref: "Rebudget" },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  date: Date,
  amount: Number,
  name: String,
  description: String,
});

const Expense = mongoose.model("Expense", expenseSchema);

//make this exportable to be accessed in `app.js`
module.exports = Expense;

//
