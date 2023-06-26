module.exports = (app) =>{
    const event = require('../controllers/events.controller.js')
    app.post('/InsertEvent', event.createEvent);
    app.post('/ConsultEvent', event.consultEvent);
    app.delete('/DeleteEvent/:id', event.DeleteEvent);
}