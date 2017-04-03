var app = angular.module('myApp');
app.service('hitService', function($http){
    this.getHits = function(){
        return $http.get('http://api.vschool.io:6543/hitlist.json')
    }
})