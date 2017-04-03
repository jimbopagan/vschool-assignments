var app = angular.module('myApp', []);
app.controller('mainControl', ['$scope', function ($scope) {
    $scope.test = 'hi from here';
    $scope.number= {};
    $scope.add = function () {
        
        $scope.number.total = $scope.number.num1 + $scope.number.num2;
        console.log($scope.number.total)
    }

}])
app.controller('secondControl', ['$scope', function ($scope) {
    $scope.test = 'hi from here';
    $scope.multNumber= {};
    $scope.mult = function () {
        
        $scope.multNumber.total = $scope.multNumber.num1 * $scope.multNumber.num2;
        console.log($scope.multNumber.total)
    }

}])