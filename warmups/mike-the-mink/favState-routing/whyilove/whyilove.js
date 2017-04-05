var app = angular.module('myApp');
app.controller('whyiloveController',['$scope', function($scope){
    $scope.test='hi from why i lvoe';
    $scope.mike = {
        image: 'http://coursework.vschool.io/content/images/2015/06/download.jpg'
    };
}])