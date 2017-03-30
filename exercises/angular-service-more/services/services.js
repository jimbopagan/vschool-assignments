var app = angular.module('myApp');

app.service('cartoonService', function(){
    this.cartoons = [];
    this.addCartoon = function(cartoon){
        this.cartoons.push(cartoon);
    }
})