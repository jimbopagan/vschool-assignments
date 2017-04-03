var app = angular.module('myApp');
app.service('cartoonService', function(){
    this.cartoons=[];
    var self = this;
    this.addCartoon = function(cartoon){
        self.cartoons.push(cartoon)
        
    }
})