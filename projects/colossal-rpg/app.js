var readline = require('readline-sync');
var greeting = readline.question('Greetings. You have just entered the realm of Bacon. To enter you must enter the word bacon');
var min = 1;
var max = 30;
var i = 0;
var player = {
  name: 'BL Thomas',
  hitPoints: [],///should bea funciton that gets a random number
  defense:[],
  attack:[],
  run:[],
  inventory:[]
}
var enemy1 = {
  name: 'BIG MAC',
  hitPoints: 10,///should bea funciton that gets a random number
  defense:[30],
  attack:[20],
  run:[0];
  inventory:['Double Cheeseburger']
};
var enemy2 = {
  name: 'WHOOPER',
  hitPoints: 40,///should bea funciton that gets a random number
  defense:[50],
  attack:[40],
  run:[0];
  inventory:['Original Chickenn Sandwich']
};
var enemy3 = {
  name: 'BACANATOR',
  hitPoints: 60,///should bea funciton that gets a random number
  defense:[80],
  attack:[60],
  run:[0];
  inventory:['Checker Fries']
};

while (i < 1){
  function game(a){
    if (a === 'bacon'){
      console.log('You are in!');
      var b = readline.question('This game is not for the faint of hearts, cry babies, or poopie heads are you any of those?');
      if (b === 'no'){
        var c = readline.question('Okay buddy...made it this far. Now we need to make it around the world of bacon without losing our bacon to some of the ragamuffins that frequent this section of Bacon. Do you wnat to walk? Type w ding dong!');
        if (c === 'w'){
          //Initiate random num function
          getRandomInt(min,max);
          console.log('Here2');
        }
        if (c === 'w'){
          var d = readline.question('Okay not attacked yet...but this is the land of bacon and eveyone is always looking to take some bacon. Do you want to walk? Type w');


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
  function getRandomInt(min, max) {

    var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    walking(randomNum);
    return;
  }
  /////player walks if the player gets a random numbers that is divisble by 3 from a
  //////range of 1-30. (30% chance of getting an enemy)
  function walking(randomNum){
    if (randomNum % 3 === 0){
      console.log('Here1');
      randomEnemy();
      return;
    } else if (randomNum % 3 !== 0){
      console.log('Here3');
      return;

    }
  }

  ///enemy generator, use random number and set ranges.
  function randomEnemy(min, max) {
      var randomEnemyNum = Math.floor(Math.random() * (max - min + 1)) + min;
      enemyGenerator(randomEnemyNum);
      return;
  }
  function enemyGenerator (enemy){
    if (enemy >= 20 && enemy <= 30){
      var e = readline.question('Type r to run; a to attack')
      if (e === 'a'){
        randomAttack();
      } else if (e === 'r'){
        //run run function
      }
      return console.log('enemy1');

    } else if (enemy >= 9 && enemy <= 19){
      return console.log('enemy2');
    } else if (enemy >= 1 && enemy<=10){
      return console.log('enemy3');
    }
  }
  //////Player attacks. random number generated vetween 1 - 100. for the enemy and player defense and attack.
  //////The random numbers are pushed into an array. Then compared to see if player attack is larger than enemy defense,
  //////if it is enemy defense takes a hit.
  ///////If player attack is not larger than enemy defense player defense takes a hit. After that enemy gets to make a counter attack
  //////
  //////
  //////
  var randAttackMax = 100;
  var randAttackMin = 1;
  function randomAttack(randAttackMin, randAttackMax) {
      playerAttack = Math.floor(Math.random() * (randAttackMax - randAttackMin + 1)) + randAttackMin;
      playerDefense = Math.floor(Math.random() * (randAttackMax - randAttackMin + 1)) + randAttackMin;
      player.attack.push(playerAttack);
      player.defense.push(playerDefense);
      enemyAttack = Math.floor(Math.random() * (randAttackMax - randAttackMin + 1)) + randAttackMin;
      enemyDefense = Math.floor(Math.random() * (randAttackMax - randAttackMin + 1)) + randAttackMin;
      enemy1.attack.push(enemyAttack);
      enemy1.defense.push(enemyDefense);
      // var randomAttackNum = Math.floor(Math.random() * (randAttackMax - randAttackMin + 1)) + randAttackMin;
      if (playerAttack > enemyDefense){
        var newEnemyDefense = enemyDefense - playerAttack;
        enemy1.defense.push(newEnemyDefense);
      } else if (playerAttack < enemyDefense) {
        var newPlayerDefense = playerDefense - 10;
        player.defense.push(newPlayerDefense);
      }
      ///////run enemy counter attack
      return;
  }
//////enemyAttack
function enemyCounterAttack(rand){
  playerCounterDefense = player.defense[0];
  enemyCounterAttack = Math.floor(Math.random() * (randAttackMax - randAttackMin + 1)) + randAttackMin;
  if (playerCounterDefense > enemyCounterAttack){
    //////palyer wins
    //////if enemy dead add item to invetory
    //////else ask to fight same enemy or another
    ////////if same randomAttack function
    //////if another run getRandomInt function
    /////ask if you want to play again
  } else if (playerCounterDefense < enemyCounterAttack){
    ///player loses
    //////if player defnse = 0 player is dead
    ///////if not ask to play again
    ////if no quit
    //////if yes run getRandomInt
    var newPlayerDefense = playerDefense - 10;
    player.defense.push(newPlayerDefense);
  }
  ///////run enemy counter attack
  return;

//////player runs. random number generated that decdides the player run numer
///////from 2 numbers thus 50% chance to get away or get caught,

var low = 1;
var high = 2;
function randomRunning(low, high) {
    var randomRunNum = Math.floor(Math.random() * 2) + 1;
    playerRun(randomRunNum);
    return;
}
function playerRun(rand){
  if (rand <= 1 ){
    var maxRun = 30;
    console.log('You escaped');
    ////ask to play again
    //////if yes run getRandomInt function
    ////if no quit game
    return console.log(maxRun);
  } else if (rand > 1){
    var midRun = 20;
    console.log('You got caught!');
    ////run enemyCounterAttack
    return console.log(midRun);
  }
}
randomRunning();
//////player defense. random number generated that decdides the player defense number with 30 being the max,
//////20 mid, 10 lowest defense
function randomADefense(min, max) {
    var randomDefenseNum = Math.floor(Math.random() * (max - min + 1)) + min;
    playerDefense(randomDefenseNum );
    // console.dir(playerAttacking);
    return;
}
function playerDefense(rand){
  if (rand >= 20 && rand <= 30){
    var maxDefense = 30;
    return console.log(maxDefense);
  } else if (rand >= 9 && rand <= 19){
    var midDefense = 20;
    return console.log(midDefense);
  } else if (rand >= 1 && rand <= 10){
    var lowDefense = 10;
    return console.log(lowDefense);
  }
}
randomDefense(1,30);
//////enemy attacks. random number generated that decdides the player attack numer with 30 being the max,
//////20 mid, 10 lowest attack
function randomEnemyAttack(min, max) {
    var randomEnemyAttackNum = Math.floor(Math.random() * (max - min + 1)) + min;
    playerAttacking(randomEnemyAttackNum);
    console.dir(EnemyAttacking);
    return;
}



  //////after this loop stops
    i++;
}


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
