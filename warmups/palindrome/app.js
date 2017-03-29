var arr='';
var myString = '';
function palindrome(str){
  reversed(str);
  var newChar='';
  str1 = str.split(' ').join(newChar);
  str2 = str1.split(',').join(newChar);
  str3 = str2.split('!').join(newChar);
  str4 = str3.split('.').join(newChar);
  arr = str4.toLowerCase();
  for(var i=0; i<arr.length; i++){
    for (var j=0; j< myString.length; j++){
      if (arr[i] === myString[j]){
        return true;
      } else {
        return false;
      }
    }
  }

}

function reversed(string) {
  var newChar='';
  string1 = string.split(' ').join(newChar);
  string2 = string1.split(',').join(newChar);
  string3 = string2.split('!').join(newChar);
  string4 = string3.split('.').join(newChar);
  var reversedString = string4.split("").reverse().join("");
  myString = string4.toLowerCase();
  return;
}
palindrome("Star Rats!");
