var app = angular.module('myApp');
app.controller('HomeController', ['$scope', 'pokeService', function ($scope, pokeService) {
//    $scope.pokemon = pokeService.pokemon;
    
    $scope.addPokemon = function (pokeName) {
        $scope.pokemon = pokeService.addPokemon(pokeName);
    }
    $scope.removePokemon = function (pokeName) {
       pokeService.removePokemon(pokeName);
    }
    $scope.test = 'this is the home page'
        }])