
var app = angular.module('myApp');
app.controller('HomeController', ['$scope', 'pokeService', function ($scope, pokeService) {
    $scope.pokemon = pokeService.pokemon;
    $scope.addPokemon = function (name) {
        pokeService.addPokemon(name);
        $scope.pokeName ='';

    }
    $scope.removePokemon = function (name) {
        pokeService.deletePokemon(name);
    }
}])