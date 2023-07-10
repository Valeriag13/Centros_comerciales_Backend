const Promotion= require ('../models/promotion.model.js');

exports.createPromotion = (req, res) =>{
    if(Object.keys(req.body).length ===0){
        return res.status(400).send({
            message: "Los datos del evento no pueden quedar vacios"
        })
    }
    const promotion = new Promotion({
        name: req.body.name,
        category: req.body.category,
        description: req.body.description,
        fecha_inicio: req.body.fecha_inicio,
        fecha_fin: req.body.fecha_fin,
        place: req.body.place
    })
    promotion.save().then(data=>{
        res.status(200).send({
            message: "true"
        })
    }).catch(err=>{
        res.status(500).send({
            message: err.message || "Ha ocurrido un error intentalo mas tarde"
        })
    })
};

exports.consultPromotion = (req, res) => {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).send({
        message: "Los datos del producto no pueden quedar vacios"
      });
    }
  
    const { place } = req.body;
  
    Promotion.find({ place: place })
      .then(result => {
        if (result) {
          // Los datos coinciden
          res.status(200).json({message: 'true', data: result});
        } else {
          // Los datos no coinciden
          res.status(404).json({ message: 'false' });
        }
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ message: 'Ha ocurrido un error, intentalo más tarde' });
      });
};

exports.DeletePromotion = (req, res) =>{
    Promotion.findByIdAndRemove(req.params.id).then(promotion=>{
        if(!promotion){
            return res.status(404).send({
                message: "Tienda con Id no encontrado" +req.params.id
            })
        }
        res.status(200).send({
            message: "true"
        })
    }).catch(err =>{
        res.status(500).send({
            message: err.message || "Ha ocurrido un error intentalo mas tarde"
        })
    })
}