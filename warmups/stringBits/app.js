// Given a string, return a new string made of every other char 
// starting with the first, so 'Hello' yields 'Hlo'.
// Return n copies of the front;
 
var stringBits = function (n) {
    var newString = ' ';
    var badString =' ';
    for (var i = 0; i < n.length; i++) {
//        console.log(i);
        if (i % 2 != 0) {
            badString.concat(n[i]);
//            console.log(n[i]);
        } else if (i % 2 === 0 || i === 0){
//            console.log(n[i]);
            newString.concat(n[i]);
        }
    }
    console.log(newString);
}

stringBits('hello');