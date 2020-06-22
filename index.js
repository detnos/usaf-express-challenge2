const express = require('express')
const app = express()
const students = require('./students.json')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send(req.query))

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

app.post('/', (req, res) => {
    /* POST user data using the request body --COMPLETE*/
    let id = users[users.length - 1].id + 1;
    let name = req.body.name;
    let profilePic = req.body.profilePic;
    let lastCalled = req.body.lastCalled;
    let timesCalled = req.body.timesCalled;
    let notes = req.body.notes;

    /*TODO - add functionality to update the file*/

    res.send(`User added with id ${id}. ${name[0]} ${name[1]}'s information has been posted`);
})

app.get('/students', (req, res) => {
    res.send(students);
})

const port = 3000
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))