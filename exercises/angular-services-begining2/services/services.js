var app = angular.module('myApp');

app.service('pokeService', function(){
    this.pokemon = [];
   this.addPokemon = function(name){
       this.pokemon.push(name);
   }
   this.deletePokemon = function(name){
       
       this.pokemon.splice(this.pokemon.indexOf(name), 1)
   }
} )