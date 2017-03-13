
function antiCaps (str){
  var anticaps = ' ';
  for (var i = 0; i < str.length; i++){
    if (str[i] == str[i].toUpperCase()){
      anticaps += str[i].toLowerCase();
      // var newAnticaps = anticaps.concat(string);

    } else if (str[i] == str[i].toLowerCase()){
      anticaps += str[i].toUpperCase();
      // var newAnticaps = anticaps.concat(string);
    }
  }
  return anticaps;
}
console.log(antiCaps('Hello')); // hELLO
console.log(antiCaps('racEcar')); // RACeCAR
console.log(antiCaps('bAnAnA')); // BaNaNa
