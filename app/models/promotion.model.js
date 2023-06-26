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
        type: Date
    },
    fecha_fin: {
        type: Date
    },
    place: {
        type: String, 
    },
},{ versionKey: false });

module.exports=mongoose.model('promociones',PromotionSchema);