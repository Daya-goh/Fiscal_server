const { getYear } = require("date-fns");
const express = require("express");
const { default: mongoose } = require("mongoose");
const Expense = require("../models/expenseSchema");
const router = express.Router();
const isUser = require("./middleware");
const { default: jwtDecode } = require("jwt-decode");

//* Decoding the token
// const parseJwt = (token) => {
//   var base64Url = token.split(".")[1];
//   var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
//   var jsonPayload = decodeURIComponent(
//     window
//       .atob(base64)
//       .split("")
//       .map(function (c) {
//         return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
//       })
//       .join("")
//   );

//   return JSON.parse(jsonPayload);
// };

/* ----------------------- get expense data ----------------------- */
router.get("/", isUser, async (req, res) => {
  //* Getting the token
  const bearer = req.get("Authorization");
  const token = bearer.split(" ")[1];

  var decoded = jwtDecode(token);
  console.log(decoded);

  const transactionData = await Expense.find({
    user_id: mongoose.Types.ObjectId(decoded.userid),
  }).populate("category");
  res.status(200).send(transactionData);
});

// router.get("/", async (req, res) => {
//   const transactionData = await Expense.find().populate("category");
//   res.status(200).send(transactionData);
// });

router.get("/today", async (req, res) => {
  //* Getting the token
  const bearer = req.get("Authorization");
  const token = bearer.split(" ")[1];
  var decoded = jwtDecode(token);
  console.log(decoded);

  const todayTransaction = await Expense.find({
    user_id: mongoose.Types.ObjectId(decoded.userid),
    date: new Date().toLocaleDateString("en-CA"),
  });
  res.send(todayTransaction);
});

/* ------------------- get transaction by month ------------------- */
router.get("/:id", isUser, async (req, res) => {
  //* Getting the token
  const bearer = req.get("Authorization");
  const token = bearer.split(" ")[1];
  // console.log(bearer);
  // const userid = parseJwt(token).userid;
  // let userObjID = new ObjectId(userid)

  var decoded = jwtDecode(token);
  console.log(decoded);

  const { id } = req.params;
  const year = getYear(new Date());
  const transactionData = await Expense.find({
    user_id: mongoose.Types.ObjectId(decoded.userid),
    date: { $gte: `${year}-${id}-01`, $lte: `${year}-${id}-31` },
  }).populate("category");
  res.status(200).send(transactionData);
});
//expense/:id

module.exports = router;
