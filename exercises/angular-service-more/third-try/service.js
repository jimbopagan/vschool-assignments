var app = angular.module('myApp');
app.service('toonService', function(){
   this.toonList = [];
    var self = this;
    this.addCartoon = function(toon){
        self.toonList.push(toon);
    }
})