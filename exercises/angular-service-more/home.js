var app = angular.module('myApp');
app.controller('HomeController', ['$scope', 'cartoonService', function($scope, cartoonService){
    $scope.cartoons = cartoonService.cartoons;
    $scope.newCartoon ={};
//    $scope.test= 'hi from home js';
    $scope.addCart = function(name){
        cartoonService.addCartoon(name);
    }
}])