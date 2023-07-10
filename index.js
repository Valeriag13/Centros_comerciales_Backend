// Importar modulos y librerías
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
require('./app/routes/login.routes.js')(app);
require('./app/routes/events.routes.js')(app);
require('./app/routes/store.routes.js')(app);
require('./app/routes/promotion.routes.js')(app);
mongoose.connect(dbConfig.url, dbConfig.options).then(
    ()=>{
        console.log("Conexión a la base de datos");
    }).catch(err=>{
        console.log("Conexión incorrecta a la base de datos");
        process.exit();
    });

var port = process.env.PORT || 3000;

app.use(cors({
    origin: 'http://localhost:4200',
}));


app.get('/', (req, res) => {
    res.json({
        "message":"Esto es un JSON"
    })
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})