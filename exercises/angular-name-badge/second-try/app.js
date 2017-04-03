var app = angular.module('myApp', []);
app.controller('mainControl', ['$scope', function($scope){
    $scope.persons = [];
    $scope.myFunc = function(obj){
        $scope.persons.push(obj);
//        $scope.person.name = obj.name;
//        $scope.person.email = obj.email;
//        $scope.person.phone = obj.phone;
//        $scope.person.lastname = obj.lastname;
//        $scope.person.birth = obj.birth;
//        $scope.person.food = obj.food;
//        $scope.person.aboutyou = obj.aboutyou;
    }
}])