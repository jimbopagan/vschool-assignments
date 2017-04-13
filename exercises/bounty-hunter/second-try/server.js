var express = require('express');
var port = 8000;
var app = express();

app.use(express.static('public'));

var cars = [
    {
    make: 'Toyota',
    model: 'Corrolla'
    },
    {
    make: 'Honda',
    model: 'accord'
    },
    {
    make: 'Chevy',
    model: 'impala'
    },
    {
    make: 'Ford',
    model: 'F-150'
    }
]

app.get('/cars', function(req, res){
    res.send(cars);
})


app.listen(port, function(){
    console.log('server listening on port ' + port)
})