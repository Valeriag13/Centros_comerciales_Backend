const mongoose = require('mongoose')

const StoreSchema = mongoose.Schema({
    name: {
        type: String,
    },
    category:{
        type: String,
    },
    phone:{
        type: String
    },
    local:{
        type: String
    },
    description: {
        type: String, 
    },
    place: {
        type: String, 
    },
},{ versionKey: false });

module.exports=mongoose.model('tiendas',StoreSchema);