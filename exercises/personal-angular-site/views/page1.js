var app = angular.module('myApp');

app.controller('firstControl', ['$scope', '$http', '$routeProvider', function($scope, $http, $routeProvider){
    $scope.test='hi from view 1'
}])