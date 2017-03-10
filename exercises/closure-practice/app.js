///var passed = 3; is passed inside this is a simple closure ex
var passed = 3;
var addTo = function(passed){
  var inner =2;
  return passed + inner;
};
// console.log(addTo(3))
console.dir(addTo)
//5 in function scope

//if i change var passed to 4
var passed = 4;

console.dir(addTo)
//6 in function scope


///EX2
//////////////
//////////////
var addTo = function(passed){

  var add = function(inner){
    return passed + inner;
  }
  return add;
}

///if i console.dir with in function scope i will hae a closure of 3!!
addTo(3);


///so i can create another funciton
var addThree = new addTo(3);
var addThree = new addTo(4);
console.dir(addThree);//it will return a closure of 3
console.dir(addFour);//it will return a closure of 4


//all i need to pass is inner
console.log(addThree(1));///add 3 to 1
console.log(addThree(1));///add 4 to 1
/////i can creat unlimited amounts of functions


var mainTitle = document.getElementById('');
console.log('hi')
