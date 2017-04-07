var express = require('express');
var uuid = require('uuid');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

app.use('/bounties', bountyRouter);
var bounties=[];

app.listen(3000, function(){
    console.log('server is listening! port 3000');
})

