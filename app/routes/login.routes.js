module.exports = (app) =>{
    const login = require('../controllers/login.controller.js')
    app.post('/InsertUser', login.createUser);
    app.post('/Login', login.consultUser);
}