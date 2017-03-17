
$('#addButton').click(function(){
  var input = $('#text').val();
  $('#list').append(`<li class='myLi'><button class='subButton'><span class='check'>X</span></button>${input}</li>`);
})
$('.subButton').click(function(){
  $(this).parent().remove();
})
