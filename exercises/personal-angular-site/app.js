var app = angular.module('myApp', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl:'/views/page1.html',
        controller:'firstControl'
    })
    .when('/page2', {
        templateUrl:'/views/page2.html',
        controller:'secondControl'
    })
    .when('/page3', {
        templateUrl:'/views/page3.html',
        controller:'thirdControl'
    })
    .otherwise('/', {
        redirectTo: "/views/page1.html"
    })
}])