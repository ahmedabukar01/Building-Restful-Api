const express = require('express');
const app = express();

// routes
app.get('/',(req,res)=>{
    res.send('we are in home')
})

app.get('/posts',(req,res)=>{
    res.send('we are in posts')
})

// listen
app.listen('3000',()=>{
    console.log('server is running');
})