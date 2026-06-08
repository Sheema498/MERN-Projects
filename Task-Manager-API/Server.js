const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes =
    require("./routes/authRoutes");

const taskRoutes =
    require("./routes/taskRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
    "mongodb://127.0.0.1:27017/taskmanager"
)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

app.use("/", authRoutes);
app.use("/", taskRoutes);

app.listen(5000, () => {
    console.log(
        "Server Running On Port 5000"
    );
});