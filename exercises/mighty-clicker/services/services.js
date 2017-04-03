var app = angular.module('myApp');

app.service('RedService', [function () {
    this.redScore = 100;
    
    this.increment = function(){
        this.redScore += 1;
//        this.blueScore -= 1;
    } 
    this.decrement = function(){
        this.redScore -= 1;
    }
    this.reset = function(){
        this.redScore = 100;
    }
}])

app.service('BlueService', [function () {
    this.blueScore=100;
    
    this.increment = function () {
        this.blueScore += 1;
    }
     this.decrement = function(){
        this.blueScore -= 1;
    }
     this.reset = function(){
        this.blueScore = 100;
     }

}])
