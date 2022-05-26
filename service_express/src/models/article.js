const mongoose = require('mongoose');

const articleMongoose = mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true 
    },
    description:{
        type: String,
        require: true 
    },
    url:{
        type: String,
        require: false
    },
    create:{
        type: Date,
        require: true
    }
    
});

module.exports = mongoose.model('Article', articleMongoose);