var app = angular.module('myApp', []);
app.controller('mainControl', ['$scope', '$http', function($scope, $http){
  $scope.todos = [];////what happens if i make this an object name newThings

  $http.get('http://api.vschool.io/vschool/todo/').then(function(response){////the get is outside the fucntion bcs we want it to load all the todo
    //we have on the api. what if i dont want this list now?
    $scope.todos = response.data;
    console.log('sucessufl post');
  })

  $scope.myFunc = function(obj){///here todo is an object
    // console.log(obj);
    // $scope.todos.push(obj);
    // $scope.newThing = {};//makign form blank again for next entry
    $http.post('http://api.vschool.io/vschool/todo/', obj).then(function(response){////the then here waits for post but why
      $scope.todos.push(response.data);
      console.log($scope.todos);
      console.log('succesful post');
      // $scope.newThing = {};
    })
  }
  //
  $scope.myDelete = function (obj){
    console.log(obj);
    $http.delete('http://api.vschool.io/vschool/todo/' + $scope.todos[obj]._id).then(function(){
        $scope.todos.splice(obj, 1);
        console.log('succesful delete')
    })
    // $scope.todos.pop(obj)
  }

  $scope.edit = function(item){
    $http.put('http://api.vschool.io/vschool/todo/' + item._id, item)
  }

}])
