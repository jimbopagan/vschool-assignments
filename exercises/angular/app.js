var app = angular.module('myApp', []);
//dependencies left blank for now until we use dependencies. need square brackets

app.controller('mainController', ['$scope', function($scope){
  $scope.person = {
    firstName: 'John ',
    lastName: 'Johnson'
  }

  $scope.getName = function (){
    return $scope.person.firstName + '' + $scope.person.lastName;
  }
}]);
