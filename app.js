var express = require('express');
var path = require('path');
var routes = require('./routes/routes');

var app = express();


app.set('view engine', 'vash');

app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);




var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});

