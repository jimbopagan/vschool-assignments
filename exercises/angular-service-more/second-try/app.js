var app = angular.module('myApp', []);
app.controller('mainControl', ['$scope', 'cartoonService', function($scope, cartoonService){
    $scope.cartoons = cartoonService.cartoons;
    $scope.myFunc = function(toon){
        cartoonService.addCartoon(toon)
        $scope.newCartoon = {};
    }
}])