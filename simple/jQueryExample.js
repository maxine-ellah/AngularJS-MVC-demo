$('#btAdd').on('click', function() {

  var $txtNewTodo = $('#txtNewTodo'),
      newTodo = $txtNewTodo.val(),
      $todoList = $('#todoList');

  $todoList.append('<li>' + newTodo + '</li>');

});
