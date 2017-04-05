var app = angular.module('myApp');
app.directive('mikeTheMink', function(){
    return{
        restrict:'E',
        templateUrl: 'directive.html'
    }
})