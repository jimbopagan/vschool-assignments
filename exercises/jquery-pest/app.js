//
// var total = document.getElementById('totalButton');
// total.onclick = function(){
//
//     var bad1 = document.getElementById("goomba");
//     // console.dir(bad1);
//     var badNum = parseInt(bad1.value);
//     console.log(badNum);
//     var bad2 = document.getElementById("bob-ombs");
//     var badNum2 = parseInt(bad2.value);
//     var bad3 = document.getElementById("cheep-cheeps");
//     var badNum3 = parseInt(bad3.value);
//     var totalSum = document.getElementById("total");
//     totalSum.value = (badNum * 5) + (badNum2 * 7)+ (badNum3 * 11);
// }

$('#totalButton').click(function(){
  var badNum1 = $('#goomba').val();
  var badNum2 = $('#bob-ombs').val();
  var badNum3 = $('#cheep-cheeps').val();
  $('#buzzer').get(0).play();

  var totalSum = (badNum1 * 5) + (badNum2 * 7) + (badNum3 * 11);
  $('#total').val(totalSum);
})
$('#nightView').click(function(){
  $('div.container').toggleClass('nightView');
  $('.second-container').css('background-color', 'gray');
  $('footer').css('background-color', 'gray');
  $('.container').css('background-color', 'gray');
  // $('html').removeClass('html');
  $('html').toggleClass( 'htmlClass');
  // second-container
})
