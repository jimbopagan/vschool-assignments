// Given a string, return a version where all the 'x' have been removed.
// Except an 'x' at the very start or end should not be removed.
 
var stringX = function(str){ 
  var wanted =str[0];
  
for(var i = 1; i<str.length-1; i++){
if (str[i] != 'x'){
wanted += str[i];
}
  
}
  wanted += str[str.length-1];
   return wanted || '';
}

