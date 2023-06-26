const Events= require ('../models/events.model.js');

exports.createEvent = (req, res) =>{
    if(Object.keys(req.body).length ===0){
        return res.status(400).send({
            message: "Los datos del evento no pueden quedar vacios"
        })
    }
    const event = new Events({
        name: req.body.name,
        category: req.body.category,
        description: req.body.description,
        fecha: req.body.fecha,
        place: req.body.place
    })
    event.save().then(data=>{
        res.status(200).send({
            message: "true"
        })
    }).catch(err=>{
        res.status(500).send({
            message: err.message || "Ha ocurrido un error intentalo mas tarde"
        })
    })
};

exports.consultEvent = (req, res) => {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).send({
        message: "Los datos del producto no pueden quedar vacios"
      });
    }
  
    const { place } = req.body;
  
    Events.findOne({ place: place })
      .then(result => {
        if (result) {
          // Los datos coinciden
          res.status(200).json({message: 'true', data: [result]});
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

exports.DeleteEvent = (req, res) =>{
    Events.findByIdAndRemove(req.params.id).then(event=>{
        if(!event){
            return res.status(404).send({
                message: "Evento con Id no encontrado" +req.params.id
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