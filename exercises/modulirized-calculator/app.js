var readline = require('readline-sync');
var add = require("./add");
var sub = require("./sub.js");
var multiply = require("./multiply.js");
var divide = require("./divide");
var exponent = require("./exponent");



var num1 = parseInt(readline.question('First number'));
var num2 = parseInt(readline.question('Second number'));
var operation = readline.question('What operation?');

function calc(num1, num2, operation) {
    var temp;
    if (operation === 'add') {
        temp = add.add(num1, num2);
    } else if (operation === 'subtract') {
        temp = sub(num1, num2);
    } else if (operation === 'divide') {
        temp = divide(num1, num2);

    } else if (operation === 'multiply') {
        temp = multiply(num1, num2);
    } else if (operation === 'exponent') {
        temp = exponent.exp(num1, num2);
    }
    return temp;
}
console.log(calc(num1, num2, operation));