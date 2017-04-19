var express = require('express');
var app = express();
var path = require('path');

//bring in routes
var routes = require("./api/routes");

//define port
app.set('port', 3000);

//middleware
app.use(function(req, res, next){
    console.log(req.method, req.url);
    next();
})

//static definition
app.use(express.static(path.join(__dirname, 'public')));

//tell express to use routes
app.use('/api', routes);

//listen for request
var server = app.listen(app.get('port'), function () {
    var port = server.address().port;
    console.log('Magic happens here' + port)
})