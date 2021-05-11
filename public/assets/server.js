
//installed package
const express = require('express');

//create the express server
const app = express();

//the intial port
 const PORT = process.env.PORT || 4000;

 //Setup express app to handle data parsing
 app.use(express.urlencoded({ extended: true }));
 app.use(express.json());


 //get json data

 const jsonData = require('../../routes/db.json')

 //html routes
 app.get('/notes', (req, res) => {
    // res.sendFile(path.join(__dirname, '../public/notes.html'))
    res.send("hello my name is jeff");
});

app.get('*', (req, res) => {
    // res.sendFile(path.join(__dirname, '../public/home.html'))
    res.send(jsonData);
});

//api routes

app.get('/api/notes', (req, res) => res.json(notes));

res.json({jsonData});


app.post('/api/notes', (req, res) => {
    const newTask = req.body;

    jsonData.push(newTask);

    res.json(newTask);





 



})
 

 //app lisneter
 app.listen(PORT, () => {
     console.log(`App Listening on PORT: ${PORT}`)
 })