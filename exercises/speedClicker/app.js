
$(document).ready(function(){

if (localStorage.getItem('times-clicked')){
  $("html").click(function(){
    var timesClicked = localStorage.getItem('times-clicked');
      timesClicked++;
      $("h1").text(timesClicked);
      localStorage.setItem('times-clicked', timesClicked);
  });
} else {
  localStorage.setItem('times-clicked', 1);

}
});

function countdown(){
  for(var i=0; i<=30; i++){
    $("min").click(fun
  }
}

var ask = prompt('number to countdwn down?');

var countDownDate = ask;

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations minutes and seconds
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
