const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title:{
        type: 'string',
        require: true,
    },
    body:{
        type: 'string',
        require: true,
    },
    date:{
        type: 'date',
        default: date.now()
    }
})

module.exports = mongoose.model('posts',postSchema);