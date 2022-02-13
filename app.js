const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
require('dotenv/config')

// import routes
const postRoutes = require('./Routes/postRoute');

// middlewares
app.use(bodyParser.json());
app.use('/posts',postRoutes);

// routes
app.get('/',(req,res)=>{
    res.send('we are in home')
})



// connect mongoose
mongoose.connect(process.env.dbConnect,{ userNewUrlParser: true },()=>{
    console.log('connected to db');
})

// listen
app.listen('3000',()=>{
    console.log('server is running');
})