const mongoose = require('mongoose');
const { stringify } = require('querystring');

const postSchema = new mongoose.Schema({

    Mname:{
        type:String,
        required:true,
    },
    Mpotition:{
        type:String,
        required:true,
    },

    Email:{
        type:String,
        required:true
    },
    Pnumber:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('posts',postSchema)