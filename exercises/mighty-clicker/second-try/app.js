var app = angular.module('myApp', []);
app.controller('mainControl', ['$scope', 'RedService', 'BlueService', function($scope, RedService, BlueService){
    $scope.myRed = function(){
        $scope.redObject
    }
}])
