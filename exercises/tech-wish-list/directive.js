var app = angular.module('myApp');
app.directive('techListDirective', function(){
    return{
        restrict: 'E',
        templateUrl: 'directive.html'
    }
})