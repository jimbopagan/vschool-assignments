var app = angular.module('myApp');
app.controller('aboutController', ['$scope', function($scope){
    $scope.test = 'Hello from About!!';
    $scope.mike = {
        image: 'http://coursework.vschool.io/content/images/2015/06/download.jpg'
    };
}])
