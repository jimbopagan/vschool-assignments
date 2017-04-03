var app = angular.module('myApp');

app.service('hitService', ['$http', function($http){
    this.getHit = function(){
        return $http.get('http://api.vschool.io:6543/hitlist.json')
    }
}])