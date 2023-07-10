const mongoose = require('mongoose')

const EventsSchema = mongoose.Schema({
    name: {
        type: String,
    },
    category:{
        type: String,
    },
    description: {
        type: String, 
    },
    fecha:{
        type: String
    },
    place: {
        type: String, 
    },
},{ versionKey: false });

module.exports=mongoose.model('eventos',EventsSchema);