//installed package
const express = require('express');
const path = require('path');
const fs = require('fs');

const { v4: uuidv4 } = require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

//create the express server
const app = express();

//the intial port
 const PORT = process.env.PORT || 3800;

 //Setup express app to handle data parsing
 app.use(express.urlencoded({ extended: true }));
 app.use(express.json());
 app.use(express.static('public'))

 //get json data

 const jsonData = require('./db/db.json');
// const { finished } = require('stream');

 //html routes
 app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));

//api routes

app.get('/api/notes', (req, res) => res.json(jsonData));



app.post('/api/notes', (req, res) => {
    const newTask = req.body

    console.log(newTask);

    jsonData.push(newTask);
    res.json(newTask);
   


    var namesText = fs.readFileSync('./db/db.json');
    var words = JSON.parse(namesText);
    console.log(words);

    var data = JSON.stringify(newTask, null, 2);
    fs.writeFile('./db/db.json', data, finisheddd)
    function finisheddd(err) {
        console.log("Done")
    }
     });

 

 //app lisneter
 app.listen(PORT, () => {
     console.log(`App Listening on PORT: ${PORT}`)
 })

 module.exports = uuidv4()