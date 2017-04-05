var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('hi there, welcome to my assignment');
})

app.get('/speak/:animal', function(req, res){
    var animal = req.params.animal;
    var sound = '';
    if (animal === 'pig'){
       sound = 'oink';
    } else if (animal === 'cow'){
        sound = 'moo';
    } else if (animal === 'dog'){
        sound = 'woof woof';
    } 
    res.send('the ' + animal +  ' says '+ sound);
})

app.get('/repeat/:word/:num', function(req, res){
    var word = req.params.word;
    var num = Number(req.params.num);
    var totalWords ='';
    
    for (var i =0; i< num; i++){
        totalWords += word + ' ';
    }
    res.send(totalWords);
})

app.get('*', function(req, res){
    res.send('what are you doing with your life')
})

app.listen(3000, function(){
    console.log('server has started')
})