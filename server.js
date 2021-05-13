//installed package
const express = require('express');
const path = require('path');

//create the express server
const app = express();

//the intial port
 const PORT = process.env.PORT || 4700;

 //Setup express app to handle data parsing
 app.use(express.urlencoded({ extended: true }));
 app.use(express.json());
 app.use(express.static('public'))

 //get json data

 const jsonData = require('./db/db.json')

 //html routes
 app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));

//api routes

app.get('/api/notes', (req, res) => res.json(jsonData));



app.post('/api/notes', (req, res) => {
    const newTask = req.body;

    jsonData.push(newTask);

    res.json(newTask);
 

})
 

 //app lisneter
 app.listen(PORT, () => {
     console.log(`App Listening on PORT: ${PORT}`)
 })