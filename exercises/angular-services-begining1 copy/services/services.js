var app = angular.module('myApp');

app.service('pokeService', function() {  
    this.pokemon =[];
    
    var self = this;
    
    this.addPokemon = function(pokeName){
     self.pokemon.push(pokeName)  
    }
    this.removePokemon = function(pokeName){
        self.pokemon.splice(pokemon[pokeName], 1)
    }
});