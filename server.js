
//installed package
const express = require('express');

//create the express server
const app = express();

//the intial port
 const PORT = process.env.PORT || 8080;

 //Setup express app to handle data parsing
 app.use(express.urlencoded({ extended: true }));
 app.use(express.json());

 
 
