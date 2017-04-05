// Given an int n, return the absolute difference between n and 21,
// except return double the absolute difference if n is over 21.

var diff21 = function(n){ 
    if (n > 21){
        var total = 2 * (Math.abs(21 - n));
        return total;
    } 
}

console.log(diff21(23));