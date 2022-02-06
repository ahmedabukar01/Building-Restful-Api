const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config')
const app = express();

// routes
app.get('/',(req,res)=>{
    res.send('we are in home')
})

app.get('/posts',(req,res)=>{
    res.send('we are in posts')
})

// connect mongoose
mongoose.connect(process.env.dbConnect,()=>{
    console.log('connected to db');
})

// listen
app.listen('3000',()=>{
    console.log('server is running');
})