var app = angular.module('myApp', []);

app.controller('mainControl', ['$scope', '$http', function($scope, $http){
  $scope.deadPeople =[];

  $http.get('http://api.vschool.io:6543/hitlist.json').then(function(response){
    // console.log(response);
    for(var i=0; i<response.data.length; i++){
      $scope.deadPeople.push(response.data[i]);

    }
    console.log(response.data);
  });

}])
