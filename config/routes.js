var express = require('express');
var router = express.Router();


//Main Controller Routes
var mainController = require('../controllers/MainController');
router.get('/', mainController.index_action);
router.get('/search/:q/:q2', mainController.param_action);
router.post('/take', mainController.form_action);


//error route
router.use(mainController.error_action);




module.exports = router;

