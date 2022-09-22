const express = require("express");
const User = require("../models/UserSchema");
const router = express.Router();
const userSeed = require("./userSeed");
const bcrypt = require("bcrypt");

//TODO SEED the users
router.get("/seed", async (req, res) => {
  await User.deleteMany();

  User.create(userSeed, (error, users) => {
    if (error) {
      res.status(500).send({ error });
    } else {
      res.status(201).send(users);
    }
  });
});

//TODO CREATE route
router.post("/", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (username === "") {
      res.status(400).json({ msg: "No username" });
    } else {
      const newUser = req.body;
      const user = new User(newUser);
      user.password = await bcrypt.hashSync(user.password, 10);
      user.save().then((doc) => res.status(201).send(doc));
    }
  } catch (error) {
    res.status(500).send({ error });
  }
});

//TODO INDEX route
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    if (users === null) {
      res.status(400).send({ msg: "cannot find user" });
    } else {
      res.status(200).send(users);
    }
  } catch (error) {
    res.status(500).send({ error });
  }
});

//* For the remaining routes, it will be used / linked up under frontend SETTINGS page, where users will get to
//* (1) View their own user profile details, i.e. username & password - SHOW route (their user_id);
//* (2) Update their username / password details - UDPATE route
//* (3) Delete their account (??) - DELETE route (not too sure if we want to go down this path)

//TODO SHOW route
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (user === null) {
      res.status(400).send({ msg: "cannot find user" });
    } else {
      res.send(user);
    }
  } catch (error) {
    res.status(500).send({ error });
  }
});

//TODO UPDATE route
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const user = req.body;

  try {
    const updateUser = await User.findByIdAndUpdate(id, user, { new: true });
    if (updateUser === null) {
      res.status(400).send({ msg: "cannot update user" });
    }
    res.status(200).send(updateUser);
  } catch (error) {
    res.status(500).send({ error });
  }
});

//TODO DELETE route
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);
    if (user === null) {
      res.status(400).send({ msg: "cannot delete user" });
    } else {
      res.status(200).send(user);
    }
  } catch (error) {
    res.status(500).send({ error });
  }
});

module.exports = router;
