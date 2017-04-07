var app = angular.module('myApp');


app.service('personService', ['$http', function ($http) {

    this.myPeople = function (num1) {
        return $http.get('http://swapi.co/api/people/' + num1)

    }
}])

app.service('enemyService', ['$http', function ($http) {

    this.myEnemy = function (num2) {
        return $http.get('http://swapi.co/api/people/' + num2)

    }
}])

app.service('myShipService', ['$http', function ($http) {

    this.myShip = function () {
        
        return $http.get('http://swapi.co/api/starships/')

    }
}])

app.service('enemyShipService', ['$http', function ($http) {

    this.myEnemyShip = function () {
        return $http.get('http://swapi.co/api/starships/')

    }
}])

app.service('pageService', ['$http', function ($http) {

    this.nextPage = function (nextPage) {
        return $http.get( nextPage)

    }
}])