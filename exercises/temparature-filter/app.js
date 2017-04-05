var app = angular.module('myApp', []);
app.controller('mainControl', ['$scope', 'TemperatureService', function($scope, TemperatureService){
//    $scope.temps = [10, 15, 20, 25, 30];
    //
    
    
    
    $scope.submit = function(lat, long){
        console.log(lat, long);
        TemperatureService.getTemp(lat, long)
    }
}])

//.then(function(currentTemp){
//            $scope.currentTemp = currentTemp;
//        })