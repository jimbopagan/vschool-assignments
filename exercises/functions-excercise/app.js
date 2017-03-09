function first (num1, num2){
  var sum = num1 + num2;
  return sum;
}

first(3,4);

var subFirst = function(num1, num2){
  var sum = num1 + num2;
  return sum;
}

subFirst(5,3);

function second(num1, num2, num3){
  return Math.max(num1, num2, num3);
}
second(3,3,3);

var third = function(num){
  if (num % 2 === 0){
    return 'even';
  } else {
    return "odd";
  }
}

third(6);

var subThird = function (num){
  return num % 2 === 0;
}

subThird(5);
subThird(7);
subThird(0);

function fourth(string){
  if (string.length <= 20){
    return string.concat(' ' + string);
  } else if (string.length > 20){
    var half = Math.floor(string.length/2)
    return string.substring(0, half);
  }
}
fourth('Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string')

var fibonacci = [];
var fifth = function (n){

}

var sixth = function (num1, num2, num3){
  var subOne = Math.pow(num2, 2);
  var subThree = subOne - (4 * num1 * num3)
  var subTwo = Math.sqrt(subThree);
  var totalA = (-num2 - subTwo)/(2 * num1)
  var totalB = (-num2 + subTwo)/(2 * num1)
  console.log(totalA);
  console.log(totalB);
}
sixth(2,6,4);

function seventh (str){

}
