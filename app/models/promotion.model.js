const mongoose = require('mongoose')

const PromotionSchema = mongoose.Schema({
    name: {
        type: String,
    },
    category:{
        type: String,
    },
    description: {
        type: String, 
    },
    fecha_inicio: {
        type: String
    },
    fecha_fin: {
        type: String
    },
    place: {
        type: String, 
    },
},{ versionKey: false });

module.exports=mongoose.model('promociones',PromotionSchema);