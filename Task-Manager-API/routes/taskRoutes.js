const express = require("express");

const Task = require("../models/Task");
const auth = require("../middleware/auth");

const router = express.Router();


// Get All Tasks

router.get("/tasks", auth, async (req, res) => {

    const tasks = await Task.find({
        userId: req.user.id
    });

    res.json(tasks);
});


// Create Task

router.post("/tasks", auth, async (req, res) => {

    const task = new Task({
        title: req.body.title,
        userId: req.user.id
    });

    await task.save();

    res.json(task);
});


// Update Task

router.put("/tasks/:id", auth, async (req, res) => {

    const task =
        await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

    res.json(task);
});


// Delete Task

router.delete("/tasks/:id", auth, async (req, res) => {

    await Task.findByIdAndDelete(
        req.params.id
    );

    res.json({
        message: "Task Deleted Successfully"
    });
});

module.exports = router;