const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let students = [];

app.post("/register", (req, res) => {

    console.log("Received Data:");
    console.log(req.body);

    students.push(req.body);

    console.log(students);

    res.json({
        message: "Student Registered Successfully"
    });
});

app.get("/students", (req, res) => {
    res.json(students);
});

app.listen(3000, () => {
    console.log("Server Running On Port 3000");
});