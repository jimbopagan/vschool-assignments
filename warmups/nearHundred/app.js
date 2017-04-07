// Given an int n, return True if it is within 10 of 100 or 200.
// Note: abs(num) computes the absolute value of a number.

nearHundred = function (n) {
    var hondo = Math.abs(n - 100);
    var deuce = Math.abs(n - 200);

    if (hondo === 10 || deuce === 10){
        return true;
    } else {
        return false;
    }
}
console.log(nearHundred(90));
console.log(nearHundred(190));
console.log(nearHundred(110));
console.log(nearHundred(210));
console.log(nearHundred(70));
console.log(nearHundred(220));