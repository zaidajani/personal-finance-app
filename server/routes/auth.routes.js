const express = require('express');
const Users = require('./../models/user.model');
const bcrypt = require('bcrypt');
const router = express.Router();

router.post('/', async (req, res) => {
  const user = await Users.findOne({ email: req.body.email });
  if (!user) return res.status(404).send("user not found");

  const isPasswordMatching = await bcrypt.compare(req.body.password, user.password);
  if (!isPasswordMatching) return res.send("Incorrect password");

  const token = user.generateAuthToken();
  res.send(token);
});

module.exports = router;