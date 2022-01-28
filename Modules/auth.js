const express = require('express');
const mail = require('nodemailer');
const User = require('../DB/User');
const mongoose = require('mongoose');
const router = express.Router();

router.post('/login',async (req,res)=>{
    console.log(req.body);
    try
    {
        const user = await User.findOne({name: req.body.name})
    console.log(user.password); 
    if(req.body.pass == user.password)
    {
        console.log("Confirmed")
        res.send("Confirmed");
    }else{
        console.log("Wrong data")
        res.send("Wrong data")
    }
}catch (err) {console.log("Error");res.send("Wrong User/pass")}
})
router.post('/register',async (req,res)=>{
    console.log(req.body);
    try{const email = await User.findOne({email: req.body.email})
    if(email) {res.send("This email is exist!")}
    const user = await new User({
        name: req.body.name,
        password: req.body.pass,
        email: req.body.email
    })
    await user.save();
    if(!user) console.log("Error");
    res.send("Registered"+user);}
    catch(err) {"Error"}
})
router.post('/forgot',async (req,res)=>{
    console.log(req.body);
    const email = await User.findOne({mail: req.body.email})
    res.send(email.password);
})

module.exports = router;