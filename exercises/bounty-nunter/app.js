var express = require('express');
var uuid = require('uuid');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());


var bounties=[];

app.get('/bounties', function(req, res){
    res.send(bounties);
})
app.post('/bounties', function(req, res){
    var newBounty = req.body;
    newBounty.id = uuid.v4();
    bounties.push(newBounty);
    res.send(newBounty.id)
})

app.listen(3000, function(){
    console.log('server is listening! port 3000');
})

//var dogs=[];
//
//app.get('/dogs', function(req, res){
//    res.send(dogs);
//})
//app.post('/dogs', function(req, res){
//    var newDog = req.body;
//    newDog_id = uuid();
//    dogs.push(newDog);
//    res.send(`Your dog ${req.body.dog.name} has been added`)
//})
//
//app.listen(3000, function(){
//    console.log('server is listening! port 3000');
//})
//
//{
//   "book": [
//	
//      {
//         "firstName":"John",
//         "lastName": "Java",
//         "living": "true",
//         "bounty": "$600000",
//         "type":"sith"
//      },
//	
//      {
//         "firstName":"Rick",
//         "lastName": "Chocolate",
//         "living": "false",
//         "bounty": "$986999",
//         "type":"sith"
//      }
//   ]
//}