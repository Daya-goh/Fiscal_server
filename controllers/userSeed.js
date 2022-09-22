const bcrypt = require("bcrypt");

const userSeed = [
  {
    name: "Tom",
    username: "tom123",
    password: bcrypt.hashSync("tom123", 10),
  },
  {
    name: "Jerry",
    username: "jerry123",
    password: bcrypt.hashSync("jerry123", 10),
  },
  {
    name: "Noah",
    username: "noah123",
    password: bcrypt.hashSync("noah123", 10),
  },
  {
    name: "Olivia",
    username: "olivia123",
    password: bcrypt.hashSync("olivia123", 10),
  },
  {
    name: "Emma",
    username: "emma123",
    password: bcrypt.hashSync("emma123", 10),
  },
];

module.exports = userSeed;
