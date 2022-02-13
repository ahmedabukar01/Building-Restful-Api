const express = require('express');
const posts = require('..models/post');

const routes = express.Router();

routes.get('/',(req,res)=>{
    res.send('we are on the posts page');
})

routes.get('/specific',(req,res)=>{
    res.send('here is the spicial one');
})

routes.post('/',(req,res)=>{
    console.log(req.body)
})


module.exports = routes