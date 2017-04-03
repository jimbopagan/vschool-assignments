var app = angular.module('myApp', []);

app.controller('mainControl', ['$scope', 'httpService', function ($scope, httpService) {
    $scope.yoda = {};
    $scope.myFunc = function (speak) {
        httpService.myFunc(speak).then(function (response) {
            $scope.yoda.yodaSpeak = response.data;
        })
    }
    //    $scope.test = yodaService.test;
}])