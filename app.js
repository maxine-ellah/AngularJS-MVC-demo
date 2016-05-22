var app = angular.module('Todo', ['ngRoute']);
app.controller('TodoCtrl', function($scope) {
  $scope.newTodo = '';

  $scope.todos = [
    'Learn Spanish',
    'Watch Mads Mikkelsen films',
    'Smile at someone'
  ];

  $scope.done = function(todo) {
    var indexOf = $scope.todos.indexOf(todo);
    if (indexOf !== -1) {
      $scope.todos.splice(indexOf, 1);
    }
  }

  $scope.add = function(e) {
    if (e.which && e.which === 13) {
      $scope.todos.push($scope.newTodo);
      $scope.newTodo = '';
    }
  }
});
