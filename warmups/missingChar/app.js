// Given a non-empty string and an int n, return a new string
// where the char at index n has been removed. The value of n
// will be a valid index of a char in the original string
// (i.e. n will be in the range 0..str.length()-1 inclusive).
var arr = [];
var arr2 = [];
function missingChar(str, n) {
    for (var i = 0; i < str.length; i++) {
        if (i === n) {
            arr.push(str[i]);
           
        } else if (i !== n){
            arr2.push(str[i]);
            
        }
    }
    var str1 = arr2.toString();
    var str2 = str1.replace( /,/g, "" );
    console.log(str2)
}


missingChar('hello my name is Jimmy', 3);
//22