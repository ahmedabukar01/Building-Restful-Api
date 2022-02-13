const express = require('express');

const routes = express.Router();

routes.get('/',(req,res)=>{
    res.send('we are on the posts page');
})
routes.get('/specific',(req,res)=>{
    res.send('here is the spicial one');
})


module.exports = routes