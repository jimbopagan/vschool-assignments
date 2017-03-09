var myFunk = function (num1, num2){
  if (num1 < num2 || num2 < num1){
    console.log('You did it Jim!');
  }
}
myFunk(1,2);

var monkeyTrouble = function (aSmile, bSmile){
  if ((aSmile === true && bSmile === true) || ((aSmile === false && bSmile === false))){
    return true;
  } else if ((aSmile === true && bSmile === false) || (aSmile === false && bSmile === true)){
    return false;
  }
}

console.log(monkeyTrouble(false, false));
console.log(monkeyTrouble(true, true));
console.log(monkeyTrouble(false, true));

var d = new Date();
var hoursOfDay = d.getHours();

var properGreeting  = function (hoursOfDay){
  if (hoursOfDay < 12 ){
    console.log('Good morning');
  } else if (hoursOfDay > 12 && d < 18){
    console.log('Good Afternoon');
  } else if (hoursOfDay > 18){
    console.log('Good night');
  }
}

// console.log(properGreeting(22));
