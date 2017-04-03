var app = angular.module('myApp', []);
app.controller('mainControl', ['$scope', 'hitService', function($scope, hitService){
    $scope.hitlist=[];
    hitService.getHits().then(function(data){
        $scope.hitlist = data.data
    })
}])