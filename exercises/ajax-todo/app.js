$.get('http://api.vschool.io/jimmy/todo/', function(response){
  console.log(response);
  var todos = response;
  for(var i=0; i<response.length ; i++){
    var li = $(`<li><input type="checkbox" id="cbox1" value="first_checkbox">${todos[i].title}---${todos[i].description}</li>`)
    $('#todos').append(li);
  }
})

$('#submit').click(function(){
  var newTodo = {};
  newTodo.title = $('#title').val();
  newTodo.description = $('#description').val();
  // newTodo.price = $('#price').val();

  $.post('http://api.vschool.io/jimmy/todo/', newTodo, function(newTodo){
    var li = $(`<li><input type="checkbox" id="cbox1" value="first_checkbox">${newTodo.title}---${newTodo.description}</li>`);
    $('#todos').append(li);
  })
})
