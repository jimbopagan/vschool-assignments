var express = require('express');
var bountyRouter = express.Router();

bountyRouter.route('/')
.get(function(req, res){
    res.send(bounties);
})
.post(function(req, res){
    var newBounty = req.body;
    newBounty.id = uuid.v4();
    bounties.push(newBounty);
    res.send(newBounty.id)
})

bountyRouter.route('/')
.delete('/delete/:id', function(req, res){
    var deleteBounty = req.params.id;
    for(var i=0; i<bounties.length; i++){
        if(deleteBounty === bounties[i].id){
            res.send(bounties.splice(i,1));
        }
    }
    console.log(req.params);
})
.put('/edit/:id', function(req, res){
    var editThing = req.params;
    var editBounty = req.params.id;
    for(var i =0; i<bounties.length; i++){
        if(editBounty === bounties[i].id){
            bounties[i] = editThing;
        }
    }
})