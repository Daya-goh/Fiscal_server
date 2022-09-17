const express = require("express");
const Category = require("../models/categorySchema");

const router = express.Router();

// router.get("/seed", async (req, res) => {
//   const categoryData = [
//     { category: "Food" },
//     { category: "Transport" },
//     { category: "Medical" },
//     { category: "Shopping" },
//     { category: "Personal care" },
//     { category: "Gifts" },
//     { category: "House" },
//     { category: "Others" },
//   ];

//   Category.deleteMany();
//   const result = await Category.insertMany(categoryData);
//   res.send(result);
// });

/* ------------------------ fetch seed data ----------------------- */
router.get("/", async (req, res) => {
  const categoryData = await Category.find();
  if (categoryData) {
    res.status(200).send(categoryData);
  } else {
    res.status(400).send({ msg: "cannot retrieve data" });
  }
});

module.exports = router;
