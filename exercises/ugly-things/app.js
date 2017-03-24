
var app = angular.module('myApp', []);
app.controller('mainControl', ['$scope', function($scope){
  $scope.uglyThings = [];
  $scope.myFunc = function(info){////this is running function myFunc when i submit the
    ///form and making an object (newThing--which has properties) with the information on the form. This is automatic
    ////when i submit the form. Within myFunc i can retrive each object with the argument info.
    console.log(info);

    $scope.uglyThings.push(info);///here i am pushing each object (info) into array uglyThings
    // $scope.newThing = {};////i dont need this. it works without. it was throwing me off
  }
}])
