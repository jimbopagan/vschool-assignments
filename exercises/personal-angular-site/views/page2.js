var app = angular.module('myApp');

app.controller('secondControl', ['$scope', 'myShipService', 'enemyShipService', 'pageService', function ($scope, myShipService, enemyShipService, pageService) {
    $scope.myShip = {};
    $scope.enemyShip = {};
    $scope.spaceShips = [];
    $scope.num2 = Math.floor(Math.random() * 37);
    $scope.myShipFunc = function (num1) {
        myShipService.myShip(num1).then(function (res) {
            for (var i = 0; i < res.data.results.length; i++) {
                $scope.spaceShips.push(res.data.results[i]);
            }
            //            $scope.myShip.starships = res.data.starships;
            //            //            console.log(res.data);
            //            $scope.myShip = res.data;
            if (res.data.next) {
                next(res.data);
            }

            function next(data) {
                if (data.next) {
                    pageService.nextPage(data.next).then(function (res) {
                        for (var i = 0; i < data.results.length; i++) {
                            $scope.spaceShips.push(data.results[i]);
                        }
                        next(res.data);
                    });
                }
            }

        })
        //        console.log($scope.spaceShips[0]);

    }
    $scope.shipPicker = function () {
        var min = Math.ceil(0);
        var max = Math.floor(3);
        var random = Math.floor(Math.random() * (max - min + 1)) + min;
        if (random > 1) {
            $scope.youwinRace = 'http://static.srcdn.com/wp-content/uploads/millennium-falcon-space.jpg';
            $scope.results = 'You win! The force is strong within you. The Millenium Falcon is your prize.';


        } else if (random < 2) {
            $scope.youloseRace = 'http://altdaily.com/wp-content/uploads/spaceballs-the-movie-1973-winnebago-eagle-v-spaceship.jpg';
            $scope.results = 'You lose! You have very little force..and too much Schwartz. You need to find another hobby. The Eagle 5 is your prize.';

        }
    }
}])
