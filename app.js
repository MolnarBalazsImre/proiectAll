const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const logedR = require('./Modules/loged');
const authR = require('./Modules/auth');
const app = express();
//Foer json and body.stuff
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({ origin: '*'}));

//envirement variables
require('dotenv').config();
//DB

mongoose.connect("mongodb://localhost/BooksDB",
()=>{
    console.log("Connected")
});
//Home page
app.get('/',(req,res)=>{
    res.send("Home page");
})
//Routes
app.use('/loged',logedR);
app.use('/auth',authR);
app.listen(process.env.PORT,()=>{
    console.log("Server run on port 8000");
});




