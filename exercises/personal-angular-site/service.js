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

    this.myShip = function (num1) {
        return $http.get('http://swapi.co/api/starships/' + num1)

    }
}])

app.service('enemyShipService', ['$http', function ($http) {

    this.myEnemyShip = function (num2) {
        return $http.get('http://swapi.co/api/starships/' + num2)

    }
}])