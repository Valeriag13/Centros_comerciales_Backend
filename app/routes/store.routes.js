module.exports = (app) =>{
    const store = require('../controllers/store.controller.js')
    app.post('/InsertStore', store.createStore);
    app.post('/ConsultStore', store.consultStore);
    app.delete('/DeleteStore/:id', store.DeleteStore);
}