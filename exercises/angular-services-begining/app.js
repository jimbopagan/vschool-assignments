var app = angular.module('myApp', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when("/add", {
            templateUrl: "add/add.html",
            controller: "addController"
        })
        .when("/display", {
            templateUrl: "display/display.html",
            controller: "displayController"
        })
        .otherwise({
            redirectTo: "/"
        });

    }])