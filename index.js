const express = require('express')
const app = express()
const students = require('./students.json')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send(req.query))

app.get('/students', (req, res) => {
    res.send(students);
})

app.get('/students/:studentid', (req, res) => {
    /* GET a user by their id --COMPLETE*/
    let id = req.params.studentid;
    res.send(students.filter(student => student.id == id))
})

app.get('/grades/:studentid', (req, res) => {
    /* GET a user by their id --COMPLETE*/
    let id = req.params.studentid;
    res.send(students.filter(student => student.id == id)[0].grades)
})

app.post('/grades', (req, res) => {
    /* POST user data using the request body --COMPLETE*/
    let id = req.body.id;
    let name = req.body.name;
    let grades = req.body.grades;

    /*TODO - add functionality to update the file*/

    res.send(`${name[0]} ${name[1]}'s grade has been updated`);
})

app.post('/register', (req, res) => {
    /* POST user data using the request body --COMPLETE*/
    let id = students[students.length - 1].id + 1;
    let name = req.body.name;
    let grades = req.body.grades;

    /*TODO - add functionality to update the file*/

    res.send(`Student added with id ${id}. ${name[0]} ${name[1]}'s information has been added to the student list`);
})



const port = 3000
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))