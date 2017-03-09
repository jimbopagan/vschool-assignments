var readline = require('readline-sync');
var num1 = parseInt(readline.question('First number'));
var num2 = parseInt(readline.question('Second number'));
////////////////
//Do we need a function to make this go? Could we do it with out calc function?
////////////////we use redline to make it easier to get infor from the user? like the console?
////////////////
////we run npm init
////npm install readline-sync --save

function calc(a, b){
  var funk = readline.question('What operation?');
  if (funk === 'add'){
    function add(a, b){
      var total = a + b;
      return total;
    }
  } else if (funk === 'subtract'){
    function subtract(a, b){
      var total = a - b;
      return total;
    }
  } else if (funk === 'divide'){
    function divide(a, b){
      var total = a / b;
      return total;
    }
  } else if (funk === 'multiply'){
    function multiply(a, b){
      var total = a * b;
      return total;
    }
  }
}
console.log(calc(num1,num2));
