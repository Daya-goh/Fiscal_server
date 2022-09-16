const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const expenseSchema = new Schema({
  // add your code here to set up your schema
  user_id: String,
  budget_id: String,
  category: String,
  date: Date,
  amount: Number,
  name: String,
  description: String,
});

const Expense = mongoose.model("Expense", expenseSchema);

//make this exportable to be accessed in `app.js`
module.exports = Expense;
