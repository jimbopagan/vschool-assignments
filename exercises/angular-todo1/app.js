var app = angular.module('myApp', []);
app.controller('mainControl', ['$scope', todoService, function($scope, todoService){
  $scope.todos=[];
  $http.get('http://api.vschool.io/vschool/todo/').then(function(response){
    $scope.todos = (response.data);
    console.log('scuccess from get');
    console.log(response.data);
    console.log(response);
  })



  $scope.addTodo = function(obj){
    $http.post('http://api.vschool.io/vschool/todo/', obj).then(function(response){
      console.log(response.data)
      $scope.todos.push(response.data);
    })
  }

   $scope.myDelete = function(index){
       var id = $scope.todos[index]._id;
       $http.delete('http://api.vschool.io/vschool/todo/' + id).then(function(){
           $scope.todos.splice(index, 1);
       })
   }
   $scope.edit = function(item){
    $http.put('http://api.vschool.io/vschool/todo/' + item._id, item)
  }
}])
