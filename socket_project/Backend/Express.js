const express = require("express");

const app = express();
port = 8080;

let nextId = 4;

app.use(express.json());

app.get("/", (req, res) => {
    res.send(("Welcome To Our Session"));
});

const students = [
    { id: 1, name: "Roshan Shet", course: "MERN" },
    { id: 2, name: "Rahul Shukla", course: "JAVA" },
    { id: 3, name: "Gupta sharma", course: "PYTHON" }
];
app.get("/students", (req, res) => {
    res.json(students);
});

// POST - Add Student 
app.post("/students", (req, res) => {
    const { name, course } = req.body;

    if (!name || !course) {
        return res.status(400).json({ message: "Name and course are required" });
    }
    const newStudent = {
        id: nextId++,
        name: name,
        course: course
    };
    students.push(newStudent);
    res.status(201).json({ message: "Student Added", newStudent });
});

// get by id
app.get("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);  // Convert string to number
    const student = students.find(s => s.id === id);

    if (student) {
        res.json(student);
    } else {
        res.status(404).json({ error: "Student not found" });
    }
});

// Search by name 
app.get("/search/:name", (req, res) => {
    const searchName = req.params.name.toLowerCase();
    const student = students.find(s => s.name.toLowerCase() === searchName);

    if (student) {
        res.json({ message: "Student found", student });
    } else {
        res.status(404).json({ message: "Student not found" });
    }
});
// http://localhost:8080/search/Rahul%20Shukla

// delete Student  
app.delete("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const studentIndex = students.findIndex(
        student => student.id === id
    );
    if (studentIndex == -1) {
        return res.status(404).json({
            message: "Student Not Found"
        });
    }
    const deleteStudent = students.splice(studentIndex, 1);

    res.json({
        message: "Student Deleted Successfully",
        student: deleteStudent[0]

    });
}); // http://localhost:8080/students/4



//Update Student (PUT method)
app.put("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const { name, course } = req.body;

    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({
            message: "Student Not Found"
        });
    }
    if (!name || !course) {
        return res.status(404).json({
            message: "Name and course are required"
        });
    }
    student.name = name;
    student.course = course;

    res.json({
        message: "Student Updated successfully",
        student
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
