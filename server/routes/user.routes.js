const express = require("express");
const bcrypt = require("bcrypt");
const auth = require("./../middlewares/auth");
const _ = require("lodash");
const Users = require("./../models/user.model");
const router = express.Router();

router.post("/", async (req, res) => {
  const user = await Users.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User with this name already exists");

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const newUser = new Users({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  });

  const newUserVar = await newUser.save();
  res.send(_.pick(newUserVar, "username", "email"));
});

router.post("/expense", auth, async (req, res) => {
  const userData = await Users.findById(req.user._id);
  let user = userData;

  user.expenses.push({
    amount: req.body.amount,
    explanation: req.body.explanation,
    date: req.body.dateMonthAndYear,
  });

  await Users.findByIdAndUpdate(req.user._id, user, {
    new: true,
  });

  res.send("Entry added successfully");
});

module.exports = router;
