var app = angular.module('myApp');
app.controller('homeController', ['$scope', function($scope){
    $scope.test = 'Hellow from Home!';
    $scope.mike = {
        image: 'http://coursework.vschool.io/content/images/2015/06/download.jpg'
    };
}])