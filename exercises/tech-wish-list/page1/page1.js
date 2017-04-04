var app =angular.module('myApp');
app.controller('mainControl', ['$scope', function($scope){
    $scope.test='hi from page1.js';
      $scope.array = [
        {
            name: "iphone3",
            price: "$47",
            image: "http://www.everymac.com/images/other_images/iphone-3g-iphone-3gs-comparison.jpg"
        },
        {
            name: "iphone3",
            price: "$47",
            image: "http://www.everymac.com/images/other_images/iphone-3g-iphone-3gs-comparison.jpg"
        },
        {
            name: "iphone3",
            price: "$47",
            image: "http://www.everymac.com/images/other_images/iphone-3g-iphone-3gs-comparison.jpg"
        }];
    $scope.name='Jimmy';
}])