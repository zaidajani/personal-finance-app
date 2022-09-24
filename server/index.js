const express = require("express");
const mongoose = require("mongoose");
const userRoute = require("./routes/user.routes");
const authRoute = require("./routes/auth.routes");
const app = express();

mongoose
  .connect('mongodb://localhost/personal-finance')
  .then(() => {
    console.log("Connected to mongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());
app.use('/user', userRoute);
app.use('/auth', authRoute);


app.listen(3000, () => {
  console.log("Listening on port 3000");
});