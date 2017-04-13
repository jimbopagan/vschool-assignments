var app = angular.module('myApp', []);

app.controller('mainControl', function($scope, carService){
    $scope.cars=[];
    carService.getCars().then(function(response){
        $scope.cars =  response;
    })
})

app.service('carService', function($http){
    this.getCars = function(){
        return $http.get('/cars').then(function(response){
            return response.data;
        })
    }
})