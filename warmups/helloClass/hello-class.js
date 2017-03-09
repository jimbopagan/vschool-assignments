var helloClass = function (){
  console.log("Hello Class!");

}

helloClass();

var double = function (number){
  total = number * 2;
  console.log(total);
}

double(7);

var string = 'blue';
var favColor = function (color){
  if (color === string){
    return console.log("That is my favorite color");
  } else {console.log('What a lame color');
  }
}

favColor('red');
