const mongoose = require('mongoose');

const articleMongoose = mongoose.Schema({
    title:{
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
    },
    delete:{
        type: Date,
        require: false
    },
    update:{
        type: Date,
        require: false
    }
    
});

module.exports = mongoose.model('Article', articleMongoose);