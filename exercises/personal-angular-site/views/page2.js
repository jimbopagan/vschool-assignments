var app = angular.module('myApp');

app.controller('secondControl', ['$scope', 'myShipService', 'enemyShipService', function($scope, myShipService, enemyShipService){
    $scope.myShip={};
    $scope.enemyShip ={};
    var num2 = Math.floor(Math.random() * 37);
    $scope.myShipFunc = function (num1) {
        myShipService.myShip(num1).then(function (res) {
            $scope.hero.ship = res.data.starships;
            console.log(res.data.starships);
            $scope.myShip = res.data;
        })
        enemyShipService.myEnemy(num2).then(function (res) {
            $scope.enemyShip.ship = res.data.starships;
            console.log(res.data.starships);
            $scope.enemyShip = res.data;
        })
    }
}])