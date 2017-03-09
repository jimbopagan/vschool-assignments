var theDate = new Date();
var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var dayIndex = theDate.getDay();
var day = dayNames[dayIndex];
var hrs = theDate.getHours();
var mins = theDate.getMinutes();
var secs = theDate.getSeconds();
var ampm;
if (hrs >= 12){
  ampm = "PM";
  hrs = 24- hrs;
} else {
    ampm = 'AM'
}
if (mins < 10){
  mins = '0' + mins;
}
if (secs < 10){
  secs = '0' + secs;
}
console.log('Today is: ' + day);
console.log('Current Time: ' + hrs + ':'+ mins + ':'+ secs + '' + ampm);
