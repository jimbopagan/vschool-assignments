var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

console.log('1.');
vegetables.pop();
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

console.log('2.');
fruit.splice(0,1);
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

console.log('3.');
var indexOf = fruit.indexOf('orange');
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

console.log('4.');
fruit.push(indexOf);
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

console.log('5.');
console.log(vegetables.length)
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

console.log('6.');
var itemSix = vegetables.length;
vegetables.push(itemSix);
console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

console.log('7.');
var food = fruit.concat(vegetables);
console.log(food);

console.log('8.');
food.splice (4, 2);
console.log(food);

console.log('9.');
food.reverse();
console.log(food);

console.log('10.');
var food = food.toString();
console.log(food);

if (typeof food == "string") { 
  console.log("this is a string"); };
