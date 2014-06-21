var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var routes = require('./config/routes');
var db = require('./config/db').database;

var dbcon = require('./config/db').dbconnect(function(mongoData){
	db.setDatabase(mongoData);
});



var app = express();



app.set('view engine', 'vash');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(routes);



var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});

