// Given an int n, return the absolute difference between n and 21,
// except return double the absolute difference if n is over 21.

var diff21 = function(n){ 
    if (n > 21){
        var total = (Math.abs(21 - n));
        return total * 2;
    } 
}

console.log(diff21(23));