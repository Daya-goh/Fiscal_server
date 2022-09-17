const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  // add your code here to set up your schema
  category: String,
});

const Category = mongoose.model("Category", categorySchema);

//make this exportable to be accessed in `app.js`
module.exports = Category;
