var trashTalk = ['Loser', 'You suck!', 'Go back to Jerseey you moron!']

$( "#button" ).on('click', function(){
  min=0;
  max =2;
  var num = Math.floor(Math.random() * (max - min + 1)) + min;
  if ($('#timeBased').is(':checked')){
    var hours = $('#hours').val();
    var minutes = $('#minutes').val();
    var seconds = $('#seconds').val();
    var score = $('#hours').val()+':'+$('#minutes').val()+':'+$('#seconds').val();
    var trash = trashTalk[num];
    var name = $('#name').val();
    var game = $('#game').val();
    var date = $('#date').val();
    localStorage.setItem('game', JSON.stringify(game));
    var game = JSON.parse(localStorage.getItem('game'));

    if ($('#trash').is(':checked')){
      $('tbody').append('<tr><td>' + name + '</td>' + '<td>' + game + '</td>' + '<td>' + date + '</td>' + '<td>' + score + '</td>' + '<td>' + trash + '</td>' + '</tr>')
    } else {
      $('tbody').append('<tr><td>' + name + '</td>' + '<td>' + game + '</td>' + '<td>' + date + '</td>' + '<td>' + score + '</td>' + '<td>' + 0 + '</td>'+ '</tr>')
    }
  } else {
    var trash = trashTalk[num];
    var name = $('#name').val();
    var game = $('#game').val();
    var score = $('#score').val();
    var date = $('#date').val();
    if ($('#trash').is(':checked')){
      $('tbody').append('<tr><td>' + name + '</td>' + '<td>' + game + '</td>' + '<td>' + date + '</td>' + '<td>' + score + '</td>' + '<td>' + trash + '</td>' + '</tr>')
    } else {
      $('tbody').append('<tr><td>' + name + '</td>' + '<td>' + game + '</td>' + '<td>' + date + '</td>' + '<td>' + score + '</td>' + '<td>' + 0 + '</td>'+ '</tr>')
    }
  }

  form.reset();
});
