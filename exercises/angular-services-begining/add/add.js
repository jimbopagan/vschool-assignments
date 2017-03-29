var app = angular.module('myApp');
app.controller('addController', ['$scope', 'pokeService', function ($scope, pokeService) {
    $scope.pokemon = pokeService.pokemon;

    $scope.addPokemon = function (pokeName) {
        $scope.pokemon = pokeService.addPokemon(pokeName);

    }
    
    //    $scope.test = 'Hellow from add!';

}])