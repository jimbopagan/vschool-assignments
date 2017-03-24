var app = angular.module('myApp', []);
app.controller('mainControl', ['$scope', function($scope){
  $scope.todos = [];////what happens if i make this an object name newThings
  $scope.myFunc = function(obj){///here todo is an object
    console.log(obj)
    $scope.todos = obj;
  }

}])
