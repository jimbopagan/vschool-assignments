var app = angular.module('myApp');
app.controller('homeController', ['$scope', function($scope){
    $scope.test = 'Hellow from Home!'
}])