var app = angular.module('myApp', []);

app.controller('mainCtrl', function($scope){

  $scope.myFunc = function(info){
    $scope.person = info;
    $scope.newPerson ={};
  }
});
