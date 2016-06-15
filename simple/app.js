var app = angular.module('Todo', ['ngRoute']);
app.controller('TodoCtrl', function($scope) {
  $scope.message = "aaarrgh, Angular...";
  console.log("$scope: ", $scope)
})
