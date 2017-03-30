var app = angular.module('myApp');

app.service('pokeService', function(){
    this.pokemon = [];
    this.addPoke = function(name){
        this.pokemon.push(name);
    }
    this.deletePoke = function(name){
        this.pokemon.splice(this.pokemon.indexOf[name], 1);
    }
})