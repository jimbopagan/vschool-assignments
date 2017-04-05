var app = angular.module('myApp', []);
app.controller('mainControl', ['$scope', 'toonService', function($scope, toonService){
    $scope.toonList = toonService.toonList;
    $scope.myFunc = function(obj){
        toonService.addCartoon(obj);
        $scope.newToon = {};
    }
    $scope.test='test';
}])
