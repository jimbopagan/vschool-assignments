var app = angular.module('myApp', ['ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/page1', {
            templateUrl: 'page1/page1.html',
            controller: 'mainControl'
        })
        .when('/page2', {
            templateUrl: 'page2/page2.html',
            controller: 'secondControl'
        })
        .otherwise({
            redirectTo: "/page1"
        });
}])