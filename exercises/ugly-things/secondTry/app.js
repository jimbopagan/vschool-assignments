var app = angular.module('myApp', []);

app.controller('mainControl', ['$scope', function($scope){
    $scope.uglies = [];
    $scope.myFunc= function(ugly){
        $scope.uglies.push(ugly);
        $scope.newUgly = {};
        console.log($scope.uglies)
    }
}])