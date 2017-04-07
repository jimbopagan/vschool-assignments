var app = angular.module('myApp');

app.controller('firstControl', ['$scope', 'personService', 'enemyService', function ($scope, personService, enemyService) {
    $scope.hero = {};
    $scope.enemy = {};

    var num2 = Math.floor(Math.random() * 86);
    $scope.myFunc = function (num1) {
        personService.myPeople(num1).then(function (res) {
            $scope.hero.name = res.data.name;
            console.log(res.data);
            $scope.hero = res.data;
        })
        enemyService.myEnemy(num2).then(function (res) {
            $scope.enemy.name = res.data.name;
            console.log(res.data);
            $scope.enemy = res.data;
        })
    }
    $scope.winner = function () {
        var min = Math.ceil(0);
        var max = Math.floor(3);
        var random = Math.floor(Math.random() * (max - min + 1)) + min;
        if (random > 1) {
            $scope.youwin = 'http://static.srcdn.com/wp-content/uploads/millennium-falcon-space.jpg';
            $scope.results = 'The force is strong within you. You win';
            
            
        } else if (random < 2) {
            $scope.youlose = 'http://altdaily.com/wp-content/uploads/spaceballs-the-movie-1973-winnebago-eagle-v-spaceship.jpg';
            $scope.results = 'You have very little force..You need to find another hobby. You lose!';
            
        }

    }
}])