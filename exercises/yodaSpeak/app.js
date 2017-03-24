var app = angular.module('myApp', []);

app.controller('mainControl', ['$scope', '$http', function($scope, $http){
  // console.dir($scope)
  $scope.yoda = {};
  $scope.myFunc = function (){

    var req = {
      method: 'GET',
      url:"https://yoda.p.mashape.com/yoda?sentence= " + $scope.yodaSpeak,
      headers: {
        "X-Mashape-Key": "ydoXoQrHFfmsh6N8IE3C6r1Osz8ep1MAkh2jsnZZX99BCTLHAm"
    }
  }

    $http(req).then(function(response){
      $scope.yoda.yodaSays = (response.data);

    });
  }
}]);
