module.exports = (app) =>{
    const promotion = require('../controllers/promotion.controller.js')
    app.post('/InsertPromotion', promotion.createPromotion);
    app.post('/ConsultPromotion', promotion.consultPromotion);
    app.delete('/DeletePromotion/:id', promotion.DeletePromotion);
}