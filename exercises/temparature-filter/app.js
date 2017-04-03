var app = angular.module('myApp', []);
app.controller('mainControl', ['$scope', 'TemperatureService', function($scope, TemperatureService){
    $scope.submit = function(lat, long){
        TemperatureService.getTemp(lat, long).then(function(currentTemp){
            $scope.submit.currentTemp = TemperatureService.currentTemp;
        })
    }
}])