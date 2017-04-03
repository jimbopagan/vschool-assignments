var app = angular.module('myApp');
app.service('RedService', function(){
    this.redObject = {};
    var redSelf = this;
    this.increment = function(){
        redSelf += 1
    }
    this.decrement = function(){
        
    }
    this.reset = function(){
        
    }
})
app.service('BlueService', function(){
    this.blueObject = {};
    var blueSelf = this;
    this.increment = function(){
        
    }
    this.decrement = function(){
        
    }
    this.reset = function(){
        
    }
})