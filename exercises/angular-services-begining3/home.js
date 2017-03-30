var app = angular.module('myApp');

app.controller('HomeController', ['$scope', 'pokeService', function($scope, pokeService){
    $scope.pokemon = pokeService.pokemon;
    $scope.addPokemon = function(name){
        pokeService.addPoke(name)
    }
    $scope.removePokemon = function(name){
        pokeService.deletePoke(name)
    }
    $scope.test = 'hi from home js';
}])