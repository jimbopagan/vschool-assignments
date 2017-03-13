var readline = require('readline-sync');
var greeting = readline.question('Greetings. You have just entered the realm of Bacon. To enter you must enter the word bacon');
var min = 1;
var max = 30;
var i = 0;
var player = {
  name: 'BL Thomas',
  hitPoints: [],
  defense:[],
  attack:[],
  run:[],
  inventory:[]
}
var enemy1 = {
  name: 'BIG MAC',
  hitPoints: [40],
  defense:[],
  attack:[],
  run:[],
  inventory:['Double Cheeseburger']
};
var enemy2 = {
  name: 'WHOOPER',
  hitPoints: [60],
  defense:[],
  attack:[],
  run:[],
  inventory:['Original Chickenn Sandwich']
};
var enemy3 = {
  name: 'BACANATOR',
  hitPoints: [100],
  defense:[],
  attack:[],
  run:[],
  inventory:['Checker Fries']
};

while (i < 1){
  function game(first){
    if (first === 'bacon'){
      console.log('You are in!');
      var second = readline.question('This game is not for the faint of hearts, cry babies, or poopie heads are you any of those?');
      if (second === 'no'){
        var third = readline.question('Okay buddy...made it this far. Now we need to make it around the world of bacon without losing our bacon to some of the ragamuffins that frequent this section of Bacon. Do you want to walk? Type w ding dong!');
        if (third === 'w'){
          //Initiate random num function
          console.log('hi1')
          getRandomInt();
          console.log('hi2');
          var ninth = readline.question('Press Print to see your inventory and player health');
          if (ninth === 'Print'){
            console.log(player);
            return;
          } else {
            return;
          }
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
  function getRandomInt() {
    var min = 1;
    var max = 30;
    console.log('hi3')
    var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log('hi4')
    console.log(randomNum);
    walking(randomNum);
    return;
  }
  /////player walks if the player gets a random numbers that is divisble by 3 from a
  //////range of 1-30. (30% chance of getting an enemy)
  function walking(walkRand){
    if (walkRand % 3 === 0){
      console.log(walkRand);
      console.log('hi5')
      randomEnemy();
      return;
    } else if (walkRand % 3 !== 0){
      console.log(walkRand);
      console.log('hi6')
      var fourth = readline.question('Want to play again Ding a Ling? if yes type y!');
      if (fourth === 'y'){
        //Initiate random num function
        console.log('hi7')
        var min = 1;
        var max = 30;
        getRandomInt(min,max);

      } else {
        console.log('hi8');
        i=1;
        console.log('hi9');
      }
      return;

    }
  }

  ///enemy generator, use random number and set ranges.
  function randomEnemy() {
    var min = 1;
    var max = 30;
      var randomEnemyNum = Math.floor(Math.random() * (max - min + 1)) + min;
      console.log('hi11');
      enemyGenerator(randomEnemyNum);
      return;
  }
  function enemyGenerator (randomEnemyNum){
    if (randomEnemyNum >= 20 && randomEnemyNum <= 30){
      console.log('Hey Punk, give me your bacon!!');
      var fifth = readline.question('We have came across and angered the most powerful boss in Bacon City. The Baconator. We will have to out a good fight to beat this boss. Type r to run; a to attack')
      if (fifth === 'a'){
        console.log('You have chosen to fight. Good luck!');
        randomAttack();
      } else if (fifth === 'r'){
        console.log('You have chosen to run like the wuss you are!');
        randomRunning();
      }
      return;

    } else if (randomEnemyNum >= 9 && randomEnemyNum <= 19){
      console.log('hi13');
      var sixth = readline.question('Oh oh...The Whooper has taken some interest in our bacon. Type r to run; a to attack')
      if (sixth === 'a'){
        console.log('hi14');
        console.log('You have chosen to fight. Good luck!');
        randomAttack();
      } else if (sixth === 'r'){
        console.log('You have chosen to run like the wuss you are!');
        randomRunning();
      }
      return;

    } else if (randomEnemyNum >= 1 && randomEnemyNum <=10){
    console.log('hi15');
    var seventh = readline.question('Type r to run; a to attack')
    if (seventh === 'a'){
      console.log('hi16');
      randomAttack();
    } else if (seventh === 'r'){
      console.log('hi17');
      randomRunning();
    }
    return;

    }
  }
  //////Player attacks. random number generated vetween 1 - 100. for the enemy and player defense and attack.
  //////The random numbers are pushed into an array. Then compared to see if player attack is larger than enemy defense,
  //////if it is enemy defense takes a hit.
  ///////If player attack is not larger than enemy defense player defense takes a hit. After that enemy gets to make a counter attack
  //////
  //////
  //////

  function randomAttack() {
    console.log('hi18');
    var randAttackMax = 100;
    var randAttackMin = 1;
      playerAttack = Math.floor(Math.random() * (randAttackMax - randAttackMin + 1)) + randAttackMin;
      playerDefense = Math.floor(Math.random() * (randAttackMax - randAttackMin + 1)) + randAttackMin;
      player.attack.push(playerAttack);
      player.defense.push(playerDefense);
      enemyAttack = Math.floor(Math.random() * (randAttackMax - randAttackMin + 1)) + randAttackMin;
      enemyDefense = Math.floor(Math.random() * (randAttackMax - randAttackMin + 1)) + randAttackMin;
      enemy1.attack.push(enemyAttack);
      enemy1.defense.push(enemyDefense);
      if (playerAttack > enemyDefense){
        console.log('hi19');
        var newEnemyDefense = enemyDefense - playerAttack;
        enemy1.defense[0] = newEnemyDefense;
      } else if (playerAttack < enemyDefense) {
        console.log('hi20');
        var newPlayerDefense = playerDefense - 10;
        player.defense[0]= newPlayerDefense;
      }
      ///////run enemy counter attack
      enemyCounterAttack();
      return;
  }
//////enemy counter player attack. this runs after random attack.
function enemyCounterAttack(){
  var randAttackMax = 100;
  var randAttackMin = 1;
  playerCounterDefense = player.defense[0];
  enemyCounterAttack = Math.floor(Math.random() * (randAttackMax - randAttackMin + 1)) + randAttackMin;
  if (playerCounterDefense > enemyCounterAttack){
    console.log('hi21');
    console.log('You win fight!');

    //////if enemy dead add item to invetory and HP
    //////ask player if he wnast to play again
    ////////if yes run getRandomInt function
    /////ask if you want to play again
  } else if (playerCounterDefense < enemyCounterAttack){
    console.log('hi22');
    ///player loses
    //////if player defense = 0 player is dead
    ///////if not ask to play again
    ////if no quit
    //////if yes run getRandomInt
    var newPlayerDefense = playerDefense - 10;
    player.defense.push(newPlayerDefense);
  }

  return;


  ///////
  ///////
 /////This is the enemy counter to player runnning
 var randRunMax = 100;
 var randRunMin = 1;
 function enemyCounterRun(randRunMin, randRunMax) {
   console.log('hi23');
     playerRun = Math.floor(Math.random() * (randRunkMax - randRunMin + 1)) + randRunMin;
     playerDefense = Math.floor(Math.random() * (randRunMax - randRunMin + 1)) + randRunMin;
     player.Run.push(playerRun);
     player.defense.push(playerDefense);
     enemyRun = Math.floor(Math.random() * (randRunMax - randRunMin + 1)) + randRunMin;
     enemyDefense = Math.floor(Math.random() * (randRunMax - randRunMin + 1)) + randRunMin;
     enemy1.Run.push(enemyRun);
     enemy1.defense.push(enemyDefense);
     if (playerRun > enemyDefense){
       console.log('hi24');
       var newEnemyDefense = enemyDefense - playerRun;
       enemy1.defense[0] = newEnemyDefense;
     } else if (playerRun < enemyDefense) {
       console.log('hi25');
       var newPlayerDefense = playerDefense - 10;
       player.defense.push(newPlayerDefense);
     }
     ///////run enemy counter attack
     enemyCounterAttack();
     return;
 }



//////player runs. random number generated that decdides the player run numer
///////from 2 numbers thus 50% chance to get away or get caught,

function randomRunning() {

  console.log('hi18');
    var randRun = Math.random() * 1;
    playerRun(randRun);
    return;
}
function playerRun(randRun){
  console.log('hi19');
  if (randRun <= .5 ){
    var maxRun = 30;
    console.log('You escaped');
    var d = readline.question('Would you like to play again? if yes type y')
    if (d === 'y'){
      console.log('hi20');
      getRandomInt();
    } else {
      return;
    }
  } else if (randRun > .5){
    console.log('You got caught!');
    ////run enemyCounterrun
    console.log('hi16');
    enemyCounterRun();
    return;
  }
}


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
