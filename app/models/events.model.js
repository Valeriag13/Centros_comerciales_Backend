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
        type: Date
    },
    place: {
        type: String, 
    },
},{ versionKey: false });

module.exports=mongoose.model('eventos',EventsSchema);