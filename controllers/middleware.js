const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;
const User = require("../models/UserSchema");

const isUser = async (req, res, next) => {
  const bearer = req.get("Authorization");
  const token = bearer.split(" ")[1];

  try {
    const payload = jwt.verify(token, SECRET);
    const user = await User.findById(payload.userid);

    if (user) {
      next();
    } else {
      res.status(401).send("No entry");
    }
  } catch (error) {
    res.status(401).send({ error });
  }
};

module.exports = isUser;
