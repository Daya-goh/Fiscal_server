const express = require("express");
const Expense = require("../models/expenseSchema");
const router = express.Router();

/* ----------------------- create seed data ----------------------- */
router.get("/seed", async (req, res) => {
  const expenseData = [
    {
      user_id: "",
      budget_id: "",
      category: "food",
      date: "2022-07-01",
      amount: 6.2,
      name: "Ah ma chi mian",
      description: "",
    },
    {
      user_id: "",
      budget_id: "",
      category: "transport",
      date: "2022-07-01",
      amount: 12,
      name: "Grab",
      description: "grab to town",
    },
    {
      user_id: "",
      budget_id: "",
      category: "house",
      date: "2022-07-02",
      amount: 33.3,
      name: "house",
      description: "portable vacuum, ink",
    },
    {
      user_id: "",
      budget_id: "",
      category: "shopping",
      date: "2022-07-03",
      amount: 73,
      name: "books",
      description: "kinokuniya books",
    },
    {
      user_id: "",
      budget_id: "",
      category: "food",
      date: "2022-07-03",
      amount: 5,
      name: "wanton mee",
      description: "",
    },
    {
      user_id: "",
      budget_id: "",
      category: "house",
      date: "2022-07-04",
      amount: 37.95,
      name: "hair products",
      description: "shampoo, conditioner",
    },
    {
      user_id: "",
      budget_id: "",
      category: "transport",
      date: "2022-07-04",
      amount: 16.8,
      name: "Grab",
      description: "grab to home from town",
    },
    {
      user_id: "",
      budget_id: "",
      category: "food",
      date: "2022-07-05",
      amount: 13.5,
      name: "groceries",
      description: "",
    },
    {
      user_id: "",
      budget_id: "",
      category: "food",
      date: "2022-07-05",
      amount: 31.3,
      name: "food",
      description: "fishhead curry",
    },
    {
      user_id: "",
      budget_id: "",
      category: "shopping",
      date: "2022-07-06",
      amount: 9.9,
      name: "shopping",
      description: "decorative items",
    },
    {
      user_id: "",
      budget_id: "",
      category: "food",
      date: "2022-07-06",
      amount: 4,
      name: "herbal tea",
      description: "",
    },
    {
      user_id: "",
      budget_id: "",
      category: "food",
      date: "2022-07-07",
      amount: 51.5,
      name: "food",
      description: "ichiban",
    },
    {
      user_id: "",
      budget_id: "",
      category: "food",
      date: "2022-07-07",
      amount: 29.6,
      name: "groceries",
      description: "fairprice",
    },
    {
      user_id: "",
      budget_id: "",
      category: "transport",
      date: "2022-07-08",
      amount: 50,
      name: "ezlink",
      description: "top up card",
    },
    {
      user_id: "",
      budget_id: "",
      category: "food",
      date: "2022-07-10",
      amount: 10,
      name: "food",
      description: "",
    },
    {
      user_id: "",
      budget_id: "",
      category: "medical",
      date: "2022-07-10",
      amount: 5.2,
      name: "medical",
      description: "plaster",
    },
    {
      user_id: "",
      budget_id: "",
      category: "food",
      date: "2022-07-11",
      amount: 7.2,
      name: "food",
      description: "Macdonalds mcspicy",
    },
    {
      user_id: "",
      budget_id: "",
      category: "shopping",
      date: "2022-07-11",
      amount: 49.9,
      name: "clothes",
      description: "dress",
    },
    {
      user_id: "",
      budget_id: "",
      category: "food",
      date: "2022-07-13",
      amount: 5.6,
      name: "food",
      description: "char kway tiao",
    },
    {
      user_id: "",
      budget_id: "",
      category: "food",
      date: "2022-07-13",
      amount: 7.9,
      name: "food",
      description: "chicken rice set",
    },
    {
      user_id: "",
      budget_id: "",
      category: "transport",
      date: "2022-07-14",
      amount: 18,
      name: "grab",
      description: "grab to work",
    },
    {
      user_id: "",
      budget_id: "",
      category: "food",
      date: "2022-07-14",
      amount: 18,
      name: "grab",
      description: "genki",
    },
    {
      user_id: "",
      budget_id: "",
      category: "personal care",
      date: "2022-07-14",
      amount: 69.2,
      name: "cosmetics",
      description: "foundation",
    },
    {
      user_id: "",
      budget_id: "",
      category: "transport",
      date: "2022-07-15",
      amount: 27,
      name: "grab",
      description: "grab to joo koon",
    },
    {
      user_id: "",
      budget_id: "",
      category: "food",
      date: "2022-07-16",
      amount: 83.9,
      name: "grab",
      description: "dinner with parents",
    },
    {
      user_id: "",
      budget_id: "",
      category: "shopping",
      date: "2022-07-17",
      amount: 29.5,
      name: "shopping",
      description: "phone charger",
    },
    {
      user_id: "",
      budget_id: "",
      category: "gifts",
      date: "2022-07-18",
      amount: 29.5,
      name: "present",
      description: "bro's bday",
    },
    {
      user_id: "",
      budget_id: "",
      category: "food",
      date: "2022-07-18",
      amount: 9.5,
      name: "food",
      description: "korean food",
    },
    {
      user_id: "",
      budget_id: "",
      category: "food",
      date: "2022-07-19",
      amount: 15.5,
      name: "food",
      description: "",
    },
    {
      user_id: "",
      budget_id: "",
      category: "shopping",
      date: "2022-07-20",
      amount: 69.9,
      name: "clothes",
      description: "dress",
    },
    {
      user_id: "",
      budget_id: "",
      category: "others",
      date: "2022-07-20",
      amount: 40.9,
      name: "vitamins",
      description: "vit c",
    },
    {
      user_id: "",
      budget_id: "",
      category: "food",
      date: "2022-07-21",
      amount: 3.5,
      name: "food",
      description: "fishball noodles",
    },
    {
      user_id: "",
      budget_id: "",
      category: "food",
      date: "2022-07-21",
      amount: 7.5,
      name: "food",
      description: "starbucks",
    },
    {
      user_id: "",
      budget_id: "",
      category: "medical",
      date: "2022-07-22",
      amount: 79,
      name: "medical",
      description: "",
    },
    {
      user_id: "",
      budget_id: "",
      category: "food",
      date: "2022-07-23",
      amount: 5.5,
      name: "food",
      description: "fishsoup",
    },
    {
      user_id: "",
      budget_id: "",
      category: "transport",
      date: "2022-07-24",
      amount: 18,
      name: "grab",
      description: "grab to work",
    },
    {
      user_id: "",
      budget_id: "",
      category: "food",
      date: "2022-07-24",
      amount: 4.1,
      name: "food",
      description: "",
    },
    {
      user_id: "",
      budget_id: "",
      category: "food",
      date: "2022-07-25",
      amount: 8.1,
      name: "food",
      description: "",
    },
    {
      user_id: "",
      budget_id: "",
      category: "house",
      date: "2022-07-26",
      amount: 28.1,
      name: "house",
      description: "containers",
    },
    {
      user_id: "",
      budget_id: "",
      category: "food",
      date: "2022-07-27",
      amount: 83.1,
      name: "food",
      description: "kbbq with family",
    },
    {
      user_id: "",
      budget_id: "",
      category: "transport",
      date: "2022-07-27",
      amount: 9,
      name: "grab",
      description: "grab to home",
    },
    {
      user_id: "",
      budget_id: "",
      category: "food",
      date: "2022-07-29",
      amount: 15,
      name: "groceries",
      description: "fairprice",
    },
    {
      user_id: "",
      budget_id: "",
      category: "food",
      date: "2022-07-30",
      amount: 7.3,
      name: "food",
      description: "",
    },
    {
      user_id: "",
      budget_id: "",
      category: "food",
      date: "2022-07-30",
      amount: 6.0,
      name: "food",
      description: "",
    },
    {
      user_id: "",
      budget_id: "",
      category: "personal care",
      date: "2022-07-31",
      amount: 19.9,
      name: "personal care",
      description: "bottle",
    },
    {
      user_id: "",
      budget_id: "",
      category: "food",
      date: "2022-09-02",
      amount: 1.6,
      name: "Big Pau",
      description: "",
    },
    {
      user_id: "",
      budget_id: "",
      category: "shopping",
      date: "2022-09-03",
      amount: 6.8,
      name: "Mala Tang Noodles",
      description: "NTUC",
    },
    {
      user_id: "",
      budget_id: "",
      category: "food",
      date: "2022-09-03",
      amount: 20.25,
      name: "Grilled Saba Fish Set",
      description: "Fuji Izakaya Bar",
    },
    {
      user_id: "",
      budget_id: "",
      category: "shopping",
      date: "2022-09-04",
      amount: 5.8,
      name: "Chips",
      description: "TianMa",
    },
    {
      user_id: "",
      budget_id: "",
      category: "food",
      date: "2022-09-04",
      amount: 1.6,
      name: "Big Pau",
      description: "",
    },
    {
      user_id: "",
      budget_id: "",
      category: "food",
      date: "2022-09-05",
      amount: 1.6,
      name: "Big Pau",
      description: "",
    },
    {
      user_id: "",
      budget_id: "",
      category: "food",
      date: "2022-09-05",
      amount: 10.9,
      name: "Korean Bibimbap",
      description: "Tanjong Pagar MRT",
    },
    {
      user_id: "",
      budget_id: "",
      category: "food",
      date: "2022-09-06",
      amount: 1.5,
      name: "Plain Waffle",
      description: "Levure Naturelle",
    },
    {
      user_id: "",
      budget_id: "",
      category: "food",
      date: "2022-09-06",
      amount: 1.5,
      name: "Teh Peng",
      description: "",
    },
    {
      user_id: "",
      budget_id: "",
      category: "food",
      date: "2022-09-09",
      amount: 1.5,
      name: "Teh Peng",
      description: "",
    },
    {
      user_id: "",
      budget_id: "",
      category: "food",
      date: "2022-09-10",
      amount: 1.6,
      name: "Big Pau",
      description: "",
    },
    {
      user_id: "",
      budget_id: "",
      category: "food",
      date: "2022-09-11",
      amount: 1.3,
      name: "Teh",
      description: "",
    },
    {
      user_id: "",
      budget_id: "",
      category: "food",
      date: "2022-09-12",
      amount: 1.5,
      name: "Plain Waffle",
      description: "Levure Naturelle",
    },
    {
      user_id: "",
      budget_id: "",
      category: "food",
      date: "2022-09-12",
      amount: 6.8,
      name: "Congee",
      description: "International Plaza",
    },
    {
      user_id: "",
      budget_id: "",
      category: "food",
      date: "2022-09-13",
      amount: 1.5,
      name: "Plain Waffle",
      description: "Levure Naturelle",
    },
    {
      user_id: "",
      budget_id: "",
      category: "food",
      date: "2022-09-13",
      amount: 3.6,
      name: "Cai Png",
      description: "Tanjong Pagar Plaza",
    },
    {
      user_id: "",
      budget_id: "",
      category: "food",
      date: "2022-09-14",
      amount: 31.5,
      name: "Hotpot Buffet",
      description: "Bugis",
    },
    {
      user_id: "",
      budget_id: "",
      category: "loan",
      date: "2022-08-01",
      amount: 124.71,
      name: "loan",
      description: "sharon wanted to loan",
    },
    {
      user_id: "",
      budget_id: "",
      category: "food",
      date: "2022-08-01",
      amount: 150.91,
      name: "dinner",
      description: "wife needed food",
    },
    {
      user_id: "",
      budget_id: "",
      category: "shopping",
      date: "2022-08-01",
      amount: 183.98,
      name: "shopping",
      description: "bought some cloths",
    },
    {
      user_id: "",
      budget_id: "",
      category: "food",
      date: "2022-08-02",
      amount: 183.98,
      name: "date with wife",
      description: "mbs",
    },
    {
      user_id: "",
      budget_id: "",
      category: "others",
      date: "2022-08-03",
      amount: 232.25,
      name: "borrow Sharon",
      description: "again she wanted to borrow",
    },
    {
      user_id: "",
      budget_id: "",
      category: "others",
      date: "2022-08-04",
      amount: 782.05,
      name: "brought family to zoo",
      description: "family outing",
    },
    {
      user_id: "",
      budget_id: "",
      category: "others",
      date: "2022-08-04",
      amount: 782.05,
      name: "brought family to zoo",
      description: "family outing",
    },
    {
      user_id: "",
      budget_id: "",
      category: "household",
      date: "2022-08-05",
      amount: 336.36,
      name: "bills",
      description: "electricity",
    },
    {
      user_id: "",
      budget_id: "",
      category: "shopping",
      date: "2022-08-06",
      amount: 122.71,
      name: "shopping",
      description: "challenger",
    },
    {
      user_id: "",
      budget_id: "",
      category: "household",
      date: "2022-08-07",
      amount: 311.91,
      name: "plumbing",
      description: "kitchen pipe leaking",
    },
    {
      user_id: "",
      budget_id: "",
      category: "household",
      date: "2022-08-08",
      amount: 311.91,
      name: "groceries",
      description: "ntuc",
    },
    {
      user_id: "",
      budget_id: "",
      category: "transport",
      date: "2022-08-08",
      amount: 129.14,
      name: "grab",
      description: "car broke down",
    },
    {
      user_id: "",
      budget_id: "",
      category: "transport",
      date: "2022-08-09",
      amount: 169.33,
      name: "groceries",
      description: "ntuc",
    },
    {
      user_id: "",
      budget_id: "",
      category: "transport",
      date: "2022-08-10",
      amount: 115.04,
      name: "JB shopping",
      description: "bought some car accesories",
    },
    {
      user_id: "",
      budget_id: "",
      category: "transport",
      date: "2022-08-10",
      amount: 180.37,
      name: "carpentry",
      description: "had to fix the ktichen cabinet",
    },
    {
      user_id: "",
      budget_id: "",
      category: "transport",
      date: "2022-08-11",
      amount: 1911.18,
      name: "new rims",
      description: "brand new car rims for the car",
    },
    {
      user_id: "",
      budget_id: "",
      category: "household",
      date: "2022-08-11",
      amount: 119.55,
      name: "bills",
      description: "water bills",
    },
    {
      user_id: "",
      budget_id: "",
      category: "household",
      date: "2022-08-12",
      amount: 119.55,
      name: "groceries",
      description: "ntuc",
    },
    {
      user_id: "",
      budget_id: "",
      category: "medical",
      date: "2022-08-13",
      amount: 172.93,
      name: "medical checkup",
      description: "eye checkup",
    },
    {
      user_id: "",
      budget_id: "",
      category: "others",
      date: "2022-08-13",
      amount: 118.16,
      name: "car workshop",
      description: "altas workshop",
    },
    {
      user_id: "",
      budget_id: "",
      category: "medical",
      date: "2022-08-14",
      amount: 152.44,
      name: "vet appointment",
      description: "brownie is sick",
    },
    {
      user_id: "",
      budget_id: "",
      category: "medical",
      date: "2022-08-15",
      amount: 465.86,
      name: "brought family to zoo",
      description: "family outing",
    },
    {
      user_id: "",
      budget_id: "",
      category: "personal care",
      date: "2022-08-15",
      amount: 167.58,
      name: "skill upgrading course",
      description: "javascript for adults",
    },
    {
      user_id: "",
      budget_id: "",
      category: "personal care",
      date: "2022-08-16",
      amount: 243.18,
      name: "carpentry",
      description: "fix the table top",
    },
    {
      user_id: "",
      budget_id: "",
      category: "household",
      date: "2022-08-17",
      amount: 188.33,
      name: "groceries",
      description: "ntuc",
    },
    {
      user_id: "",
      budget_id: "",
      category: "personal care",
      date: "2022-08-19",
      amount: 108.92,
      name: "skill upgrading course",
      description: "react for adults",
    },
    {
      user_id: "",
      budget_id: "",
      category: "food",
      date: "2022-08-20",
      amount: 108.92,
      name: "dinner",
      description: "steak and chips",
    },
    {
      user_id: "",
      budget_id: "",
      category: "shopping",
      date: "2022-08-20",
      amount: 142.33,
      name: "new phone",
      description: "got a new spare phone",
    },
    {
      user_id: "",
      budget_id: "",
      category: "transport",
      date: "2022-08-20",
      amount: 50.0,
      name: "grab",
      description: "went out for drinking",
    },
    {
      user_id: "",
      budget_id: "",
      category: "gifts",
      date: "2022-08-20",
      amount: 146.37,
      name: "bought presents",
      description: "friends birthday party",
    },
    {
      user_id: "",
      budget_id: "",
      category: "shopping",
      date: "2022-08-21",
      amount: 113.95,
      name: "shopping",
      description: "went to vivocity",
    },
    {
      user_id: "",
      budget_id: "",
      category: "shopping",
      date: "2022-08-22",
      amount: 10.66,
      name: "rent DVD",
      description: "rent DVD",
    },
    {
      user_id: "",
      budget_id: "",
      category: "shopping",
      date: "2022-08-22",
      amount: 160.98,
      name: "levis",
      description: "bought some cloths for myself",
    },
    {
      user_id: "",
      budget_id: "",
      category: "others",
      date: "2022-08-23",
      amount: 102.97,
      name: "rental",
      description: "dslr camera rental",
    },
    {
      user_id: "",
      budget_id: "",
      category: "household",
      date: "2022-08-24",
      amount: 126.22,
      name: "groceries",
      description: "ntuc",
    },
    {
      user_id: "",
      budget_id: "",
      category: "others",
      date: "2022-08-24",
      amount: 391.41,
      name: "3d printer rental",
      description: "maxis printers",
    },
    {
      user_id: "",
      budget_id: "",
      category: "medical",
      date: "2022-08-25",
      amount: 183.51,
      name: "medical checkup",
      description: "robert lim medical centre",
    },
    {
      user_id: "",
      budget_id: "",
      category: "shopping",
      date: "2022-08-26",
      amount: 136.33,
      name: "new turbo for car",
      description: "turboguage",
    },
    {
      user_id: "",
      budget_id: "",
      category: "others",
      date: "2022-08-27",
      amount: 613.18,
      name: "parents allowance",
      description: "dad needed this money for something",
    },
    {
      user_id: "",
      budget_id: "",
      category: "shopping",
      date: "2022-08-28",
      amount: 355.98,
      name: "Challenger",
      description: "bought some computer accessories",
    },
    {
      user_id: "",
      budget_id: "",
      category: "others",
      date: "2022-08-29",
      amount: 169.01,
      name: "car workshop",
      description: "altas workshop",
    },
    {
      user_id: "",
      budget_id: "",
      category: "groceries",
      date: "2022-08-29",
      amount: 129.3,
      name: "groceries",
      description: "ntuc",
    },
    {
      user_id: "",
      budget_id: "",
      category: "food",
      date: "2022-08-30",
      amount: 738.31,
      name: "dinner date",
      description: "went out for some quiet dinner",
    },
    {
      user_id: "",
      budget_id: "",
      category: "shopping",
      date: "2022-08-31",
      amount: 899.0,
      name: "lg ultrafine monitor",
      description: "bought a new monitor",
    },
  ];
  Expense.deleteMany();
  const result = await Expense.insertMany(expenseData);
  res.send(result);
});

/* ---------------------- add new expense log --------------------- */

router.post("/", async (req, res) => {
  const newExpense = req.body;
  Expense.create(newExpense, (error, newExpense) => {
    if (error) {
      res.status(500).send({ msg: "cannot add expense" });
    } else {
      res.status(200).send(newExpense);
    }
  });
  // res.send("new expense added");
});

module.exports = router;

//const ExpenseSeedController = require("./controllers/expenseSeed");
//app.use("/expense", ExpenseSeedController);
