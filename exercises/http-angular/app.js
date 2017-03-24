var app = angular.module('myApp', []);

app.controller('mainControl', ['$scope', '$http', function($scope, $http){

  $http.get('http://pokeapi.co/api/v1/pokemon/1').then(function(response){
    console.log(response.data);
  });
  var todos = {
    title:'buy fish lalala',
    description: 'not salmon',
    completed:false
  }

  $http.post('http://api.vschool.io/bob/todo/', todos).then(function(response){
    console.log(response.data);
  })///post only accept objects and it takes object and location where to post

  
}]);
