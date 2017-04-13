// Given a string of even length, return a string made of the middle two chars,
// so the string 'string' yields 'ri'. The string length will be at least 2.

var middleTwo=function(str) { 
    var first = str[(str.length/2)-1];
//    console.log(first);
    var second = str[(str.length/2)];
//     console.log(second);
    var total = first.concat(second);
    console.log(total);
}

middleTwo('helloo');
middleTwo('abcdef');
middleTwo('123456');