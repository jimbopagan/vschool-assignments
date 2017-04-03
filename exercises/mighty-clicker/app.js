var app = angular.module('myApp', []);

app.controller('mainControl', ['$scope', 'BlueService', 'RedService', function ($scope, BlueService, RedService) {
    $scope.redScore = RedService.redScore;
    $scope.blueScore = BlueService.blueScore;
    $scope.redAdd = RedService.increment;
    $scope.blueAdd = BlueService.increment;
    $scope.redSub = RedService.decrement;
    $scope.blueSub = BlueService.decrement;
    $scope.redReset = RedService.reset;
    $scope.blueReset = BlueService.reset;
    console.log($scope.redScore);

    $scope.test = 'hola';
}])