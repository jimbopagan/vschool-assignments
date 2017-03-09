var readline = require('readline-sync');
var greeting = readline.question('Greetings. You have just entered the realm of Bacon. To enter you must enter the word bacon');
var min=1;
var max=30;
function game(a){
  if (a === 'bacon'){
    console.log('You are in!');
    var b = readline.question('This game is not for the faint of hearts, cry babies, or poopie heads are you any of those?');
    if (b === 'no'){
      var c = readline.question('Okay buddy...made it this far. Now we need to make it around the world of bacon without losing our bacon to some of the ragamuffins that frequent this section of Bacon. Do you wnat to walk? Type w ding dong!');
      if (c === 'w'){
        getRandomInt(min,max);
        var d = readline.question('Okay not attacks yet...but this is the land of bacon and eveyone is always looking to take some bacon. Do you want to walk? Type w');
        //Initiate random num function
        ///take random number and get enemy from enemy funciton
        console.log('Here4');
      } else {
        console.log('Come back next time when a grow a pair of.....BACON!!');
        return;
      }
    } else {
      console.log('Cry Baby!');
      return;
    }
  } else {
    console.log('You quit!')
    return;
  }
}
game(greeting);


///get random number between 1-30
var min=1;
var max=30;
function getRandomInt(min, max) {
    var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    walking(randomNum);
    return;
}
function walking(randomNum){
  if (randomNum % 3 === 0){
    var enemy = randomNum;
    console.log('Here1');
    enemyGenerator(enemy);
    console.log('Here2');
    return;
  } else if (randomNum % 3 !== 0){
    console.log('Here3');
    return;

  }
}
///enemy generator, use random number and set ranges.
function enemyGenerator (enemy){
  if (enemy>= 20 && enemy <= 30){
    return console.log('enemy1');
  } else if (enemy >= 9 && enemy <= 19){
    return console.log('enemy2');
  } else if (enemy >= 1 && enemy<=10){
    return console.log('enemy3');
  }
}
var min=1;
var max=30;
getRandomInt(min, max);

// var characterArray = [];
//
// function Character(characterClass, gender, strength){
//   this.characterClass = characterClass;
//   this.gender = gender;
//   this.strength = strength;
//   this.fight = function(){
//     console.log('You are fighting with a strength of ' + this.strength)
//   }
// }
//
// for(var i=0; i< 5; i++){
//   characterArray.push(new Character('Cleric', 'Eunich', 9000));
// }
