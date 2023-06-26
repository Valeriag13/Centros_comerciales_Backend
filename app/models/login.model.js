const mongoose = require('mongoose')

const LoginSchema = mongoose.Schema({
    user: {
        type: String,
    },
    password:{
        type: String,
    },
    rol: {
        type: String, 
    },
},{ versionKey: false });

module.exports=mongoose.model('login',LoginSchema);