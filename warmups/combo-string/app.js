// Given 2 strings, a and b, return a string of the form short+long+short, with
// the shorter string on the outside and the longer string on the inside. The
// strings will not be the same length, but they may be empty (length 0).

var comboString = function (a, b) {
    if (a.length < b.length) {
        var first = a.concat(b);
        var second = first.concat(a);
       return second;
    } else if (a.length > b.length) {
        var first = b.concat(a);
        var second = first.concat(b);
        return second;
    }

}
console.log(comboString('hellllo', 'woooooooooorld'));
console.log(comboString('hellllo', 'world'))
console.log(comboString('', 'woooooooooorld'))