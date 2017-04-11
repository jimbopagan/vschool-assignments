var express = require('express');

var app = express();



var fruit = [
    {
        type: 'banana',
        color: 'yellow'
    },
    {
        type: 'banana',
        color: 'brown'
    },
    {
        type: 'apple',
        color: 'red'
    },
    {
        type: 'apple',
        color: 'green'
    },
    {
        type: 'apple',
        color: 'blue'
    }
]

app.get('/fruit', function (req, res) {
    foundItems = [];
    for (var i = 0; i < fruit.length; i++) {

        var haveFoundExactMatch = true;

        for (var key in req.query) {
            if (req.query[key] != fruit[i][key]) {
                haveFoundExactMatch = false;
            }
        }
        if (haveFoundExactMatch) {
            foundItems.push(fruit[i]);
        }
    }
    console.log(req.query);
    res.send(foundItems);
})





app.listen(8000, function () {
    console.log('running')
})