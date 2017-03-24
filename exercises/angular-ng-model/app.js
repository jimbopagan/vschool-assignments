var app = angular.module('myApp',[]);
app.controller('mainCtrl',['$scope', function($scope) {
  $scope.myText1 = 'What do you want to say?';
  $scope.setText1 = function() {
    return $scope.myText1
  }
  $scope.myText2 = 'Jsut Say it?';
  $scope.setText2 = function() {
    return $scope.myText2
  }
  $scope.myText3 = 'Say what?';
  $scope.setText3 = function() {
    return $scope.myText3
  }
}]);
