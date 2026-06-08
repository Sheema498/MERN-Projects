


const express = require("express")

const app = express();

port = 8080;

// middleware
app.use(express.json());

let nextId = 4;

app.get("/", (req, res) => {
    res.send("Welcome To Our Session");
})

const students = [
    { id: 1, name: "Roshan Shet", course: "MERN" },
    { id: 2, name: "Rahul Shukla", course: "JAVA" },
    { id: 3, name: "Gupta Sharma", course: "PYTHON" }
];

// Get All Students : http://localhost:8080/students
app.get("/students", (req, res) => {
    res.json(students)
});

// Get Student By ID : http://localhost:8080/students/2
app.get("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);
    if (!student) {
        return res.status(404).json({
            message: "Student Not Found"
        });
    }
    res.json(student);
})

//Search Student by Name  : http://localhost:8080/search/Roshan Shet
app.get("/search/:name", (req, res) => {
    const searchName = req.params.name.toLowerCase();
    const student = students.find(s => s.name.toLowerCase() === searchName);
    if (!student) {
        return res.status(404).json({
            message: "Student Not Found"
        });
    }
    res.json({
        message: "Student Found",
        student
    });
});

// Add Student using POST
app.post("/students", (req, res) => {
    const { name, course } = req.body;

    if (!name || !course) {
        return res.status(404).json({
            message: "Name and Course are required"
        });
    }
    const newStudent = {
        id: nextId++,
        name,
        course
    };
    students.push(newStudent);
    res.status(201).json({
        message: "Student Added Successfully",
        student: newStudent
    });
});

// http://localhost:8080/students/5
app.delete("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const studentIndex = students.findIndex(
        student => student.id === id
    );

    if (studentIndex === -1) {
        return res.status(404).json({
            message: "Student Not Found"
        });
    }
    const deleteStudent = students.splice(studentIndex, 1);
    res.json({
        message: "Student Deleted Successfull",
        student: deleteStudent[0]
    });
});

// PUT Method (Updation)

app.put("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const { name, course } = req.body;
    const student = students.find(s => s.id === id);

    if (!student) {
        return req.status(404).json({
            message: "Student Not Found"
        });
    }
    if (!name || !course) {
        return req.status(404).json({
            message: "name and courese are required"
        });
    }
    student.name = name;
    student.course = course;

    res.json({
        message: "Student Update Successfully",
        student
    });
});

app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
})




