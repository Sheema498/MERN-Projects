const express = require("express");
const cors = require("cors");

const connectDB = require("./db");

const authRoutes =
require("./routes/authRoutes");

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.use(
  "/api/auth",
  authRoutes
);

app.get("/", (req, res) => {

  res.send(
    "Smart Student Learning System API Running"
  );

});

app.listen(5000, () => {

  console.log(
    "Server Running On Port 5000"
  );

});