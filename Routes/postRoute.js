const express = require('express');
const Post = require('../models/Post');

const routes = express.Router();

routes.get('/',(req,res)=>{
    res.send('we are on the posts page');
})

routes.get('/specific',(req,res)=>{
    res.send('here is the spicial one');
})

routes.post('/', (req,res)=>{
    // const post = new Post({
    //     title: req.body.title,
    //     desc: req.body.desc
    // });

    // try{
    //     const posted = await post.save();
    //     res.json(posted)
    // }catch(err){
    //     res.json({message: err})
    // }
    console.log(req.body)
    

})


module.exports = routes