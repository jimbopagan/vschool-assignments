
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
