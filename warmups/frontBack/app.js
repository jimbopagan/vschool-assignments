// Given a string, return a new string where the first and last chars
// have been exchanged.

var frontBack = function (str) {
    var strArr = str.split('');
    var last = strArr.pop();
    strArr.reverse();
    var first = strArr.pop();
    strArr.reverse();
    strArr.push(first);
    strArr.reverse();
    strArr.push(last);
    strArr.reverse();
    var arrT = strArr.join('');
    console.log(arrT)
}
frontBack('hello');