var express = require('express');
var router = express.Router();


//Main Controller Routes
var mainController = require('../controllers/MainController');
router.get('/', mainController.indexAction);
router.get('/search/:q/:q2', mainController.paramAction);
router.use(mainController.errorAction);




module.exports = router;

