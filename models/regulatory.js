const mongoose = require('mongoose');
const { stringify } = require('querystring');

const postreg= new mongoose.Schema({

    Cname:{
        type:String,
        required:true,
    },
    Ctype:{
        type:String,
        required:true,
    },

    Rnumber:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('regulatory',postreg)