const Login= require ('../models/login.model.js');

exports.createUser = (req, res) =>{
    if(Object.keys(req.body).length ===0){
        return res.status(400).send({
            message: "Los datos del producto no pueden quedar vacios"
        })
    }
    const login = new Login({
        user: req.body.user,
        password: req.body.password,
        rol: req.body.rol
    })
    login.save().then(data=>{
        res.status(200).send({
            message: "true"
        })
    }).catch(err=>{
        res.status(500).send({
            message: err.message || "Ha ocurrido un error intentalo mas tarde"
        })
    })
}

exports.consultUser = (req, res) => {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).send({
        message: "Los datos del producto no pueden quedar vacios"
      });
    }
  
    const { email, password } = req.body;
  
    Login.findOne({ user: email, password: password }, { user: 1, rol: 1 })
      .then(result => {
        if (result) {
          // Los datos coinciden
          res.status(200).json({ message:'true',data: {user: result.user, rol: result.rol}});
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