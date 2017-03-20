var todos = [];
////Get stuff
$.get('http://api.vschool.io/jimmy/todo/', function(response){
  console.log(response);
  var todos = response;
  for(var i=0; i<response.length ; i++){
    var li = $(`<li><input data-item-id${todos[i]._id} type="checkbox" id="cbox1" value="first_checkbox">${todos[i].title}---${todos[i].description}<button calss='btn delete'></button></li>`)
    $('#todos').append(li);
  }
  deleteEvent();
})
///Post (Create)
$(document).ready(function(){
  $('#submit').click(function(){
    var newTodo = {};
    newTodo.title = $('#title').val();
    newTodo.description = $('#description').val();
    // newTodo.price = $('#price').val();

    $.post('http://api.vschool.io/jimmy/todo/', newTodo, function(newTodo){
      var li = $(`<li><input data-item-id${newTodo._id} type="checkbox" id="cbox1" value="first_checkbox">${newTodo.title}---${newTodo.description}<button calss='btn delete'></button></li>`);
      $('#todos').append(li);
    })
    todos.push(newTodo);
  })
});

$(document).ready(function deleteEvent(){
  $('.delete').on('click', function(){
    $(this.parent.hide();
  });
});
