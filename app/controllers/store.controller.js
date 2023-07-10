const Store= require ('../models/store.model.js');

exports.createStore = (req, res) =>{
    if(Object.keys(req.body).length ===0){
        return res.status(400).send({
            message: "Los datos del evento no pueden quedar vacios"
        })
    }
    const store = new Store({
        name: req.body.name,
        category: req.body.category,
        description: req.body.description,
        phone: req.body.phone,
        local: req.body.local,
        place: req.body.place
    })
    store.save().then(data=>{
        res.status(200).send({
            message: "true"
        })
    }).catch(err=>{
        res.status(500).send({
            message: err.message || "Ha ocurrido un error intentalo mas tarde"
        })
    })
};

exports.consultStore = (req, res) => {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).send({
        message: "Los datos del producto no pueden quedar vacios"
      });
    }
  
    const { place } = req.body;
  
    Store.find({ place: place })
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

exports.DeleteStore = (req, res) =>{
    Store.findByIdAndRemove(req.params.id).then(store=>{
        if(!store){
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