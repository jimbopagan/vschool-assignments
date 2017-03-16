var readline = require('readline-sync');
var greeting = readline.question('Greetings. You have just entered the realm of Bacon. To enter you must enter the word bacon');
var player = {
  playerName:[],
  name: 'BL Thomas',
  bacon: [],
  defense:[],
  attack:[],
  run:[],
  inventory:[],
}
var enemy1 = {
  name: 'BIG MAC',
  bacon: [],
  defense:[],
  attack:[],
  run:[],
  inventory:['Double Cheeseburger'],
  isPicked: false,
};
var enemy2 = {
  name: 'WHOOPER',
  bacon: [],
  defense:[],
  attack:[],
  run:[],
  inventory:['Original Chicken Sandwich'],
  isPicked: false,
};
var enemy3 = {
  name: 'BACANATOR',
  bacon: [],
  defense:[],
  attack:[],
  run:[],
  inventory:['Checker Fries'],
  isPicked: false,
};
var numBaconMax = 100;
var numBaconMin = 1;
  playerBacon = Math.floor(Math.random() * (numBaconMax - numBaconMin + 1)) + numBaconMin;
  enemy1Bacon = Math.floor(Math.random() * (numBaconMax- numBaconMin + 1)) + numBaconMin;
  enemy2Bacon = Math.floor(Math.random() * (numBaconMax - numBaconMin + 1)) + numBaconMin;
  enemy3Bacon = Math.floor(Math.random() * (numBaconMax - numBaconMin + 1)) + numBaconMin;
  player.bacon[0] = playerBacon;
  enemy1.bacon[0] = enemy1Bacon;
  enemy2.bacon[0] = enemy2Bacon;
  enemy3.bacon[0] = enemy3Bacon;

  function game(first){
    var playerName = readline.question('Player name?');
    player.playerName.push(playerName);
    if (first === 'bacon'){
      console.log('You are in!');
      var second = readline.question('Ok so this game is not cry babies. This is Bacon City!. You gotta be one touch sandwhich to make it thru this neighborhood. So are you a cry baby?');
      if (second === 'no'){
        var third = readline.question('Ok so you really want to go on?!? You must be crazy...or one tough SOB.....maybe you are just crazy...dropped too many times. Now we need to make it around Bacon City without losing our bacon to some of the ragamuffins that frequent this section of Bacon. Do you want to walk? Type w ding dong!');
        if (third === 'w'){
          //Initiate random num function
          //console.log('hi1')
          getRandomInt();
          //console.log('hi2');
          var playAgain2 = readline.question('Would you like to play again? if yes type y')
            if (playAgain2  === 'y'){
              //console.log('BBBBBBBB');
              getRandomInt();
            } else {
              return;
            }
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
    //console.log('hi3')
    var randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    //console.log('hi4')
    console.log('Random Number: ' + randomNum);
    walking(randomNum);
    return;
  }
  /////player walks if the player gets a random numbers that is divisble by 3 from a
  //////range of 1-30. (30% chance of getting an enemy)
  function walking(walkRand){
    if (walkRand % 3 === 0){
      console.log('Walk Random Number:' + walkRand);
      //console.log('hi5')
      randomEnemy();
      return;
    } else if (walkRand % 3 !== 0){
      console.log('Walk Random Number:' + walkRand);
      //console.log('hi6');
      console.log('Yeeeaaaaa booooyyyy! you have been lucky enough to prance around bacon city without getting jacked for your bacon.')
      var fourth = readline.question('Want to play again Gentlemen...or lady...whichever one you orefer. Type y to play');
      if (fourth === 'y'){
        //Initiate random num function
        // console.log('hi7')
        getRandomInt();
      } else {
        console.log('hi8');
        i=1;
        // console.log('hi9');
      }
      return;
    }
  }

  ///enemy generator, use random number and set ranges.
  function randomEnemy() {
    enemy3.defense.length = 0;
    enemy2.defense.length = 0;
    enemy1.defense.length = 0;
    enemy3.attack.length = 0;
    enemy2.attack.length = 0;
    enemy1.attack.length = 0;
    var min = 1;
    var max = 30;
    var randomEnemyNum = Math.floor(Math.random() * (max - min + 1)) + min;
    //console.log(randomEnemyNum);
    //console.log('hi11');
    enemyGenerator(randomEnemyNum);
    return;
  }
  function enemyGenerator (randEnemyNum){
    if (randEnemyNum >= 20 && randEnemyNum <= 30){
      console.log(randEnemyNum);
      console.log('Hey Punk, give me your bacon!!');
      enemy3.isPicked = true;
      //console.log(enemy3.isPicked);
      var fifth = readline.question('You have came across and angered the most powerful boss in Bacon City. The Baconator. He has been running Bacon City for atleast a decade. We will have to out a good fight to beat this boss. Type r to run; a to attack')
      if (fifth === 'a'){
        console.log('Ahh that is so cute....you have chosen to fight. Lets see what that bacon is made off. Good luck!');
        randomAttack();
      } else if (fifth === 'r'){
        console.log('You have chosen to run like the wuss you are!');
        randomRunning();
      }
      return;
    } else if (randEnemyNum >= 9 && randEnemyNum <= 19){
      console.log(randEnemyNum);
      enemy2.isPicked = true;
      //console.log(enemy2.isPicked);
      //console.log('hi13');
      console.log('Who do you think you are trotting that bacon around my territory?');
      var sixth = readline.question('Oh oh...The Whooper has taken some interest in our bacon. And he is a sour sight if there ever wwas one. It wasnt long after it was found that the burger king was running a sweat shop in the carribean that the Whopper had a long fall from grace. Type r to run; a to attack')
      if (sixth === 'a'){
        //console.log('hi14');
        console.log('Fight? I thought ypou would run by the look of you. Anyhow.....Good luck!.....i guess.');
        randomAttack();
      } else if (sixth === 'r'){
        console.log('Run? Figures! Now go change your underwear');
        randomRunning();
      }
      return;
    } else if (randEnemyNum >= 1 && randEnemyNum <=10){
      console.log(randEnemyNum);
      enemy1.isPicked = true;
      //console.log(enemy1.isPicked);
      //console.log('hi15');
      console.log('Bacon?!? Bacon?!? I need bacon!.......can i smell you arm pits?');
      var seventh = readline.question('You have run in to none other than the Big MAc....he is a ghastly fellow after years of taking steroids and smoking crack...he wants two things. Your bacon and to smell your armpits. So what do you say? Type r to run; a to attack')
      if (seventh === 'a'){
      //console.log('hi16');
      randomAttack();
      } else if (seventh === 'r'){
      //console.log('hi17');
      console.log('They say a man dies only once, but a coward dies a million times....guess this is one more for the one million tally');
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

  function randomAttack(){
    //console.log('hi18');
    var randAttackMax = 100;
    var randAttackMin = 1;
      playerAttack = Math.floor(Math.random() * (randAttackMax - randAttackMin + 1)) + randAttackMin;
      playerDefense = Math.floor(Math.random() * (randAttackMax - randAttackMin + 1)) + randAttackMin;
      player.attack[0] = playerAttack;
      player.defense[0] = playerDefense;
      enemyAttack = Math.floor(Math.random() * (randAttackMax - randAttackMin + 1)) + randAttackMin;
      enemyDefense = Math.floor(Math.random() * (randAttackMax - randAttackMin + 1)) + randAttackMin;
      // enemy1.attack.push(enemyAttack);
      // enemy1.defense.push(enemyDefense);
      if (enemy1.isPicked === true){
        if (playerAttack > enemyDefense){
          //console.log('hi19');
          console.log('Player attack: ' + playerAttack);
          console.log('Enemy Defense: ' + enemyDefense);
          var newEnemyDefense = enemyDefense - playerAttack;
          enemy1.defense[0] = newEnemyDefense;
          console.log('New Enemy Defense: ' + newEnemyDefense);
          console.log('New Enemy Array Defense: ' + enemy1.defense[0]);
        } else if (playerAttack < enemyDefense) {
          console.log('You Lost Fight. You dfense will take a hit.');
          console.log('Player Attack: ' + playerAttack);
          console.log('Enemy Defense: ' + enemyDefense);
          var newPlayerDefense = playerDefense - 10;
          player.defense[0] = newPlayerDefense;
          console.log('New Player Defense: ' + newPlayerDefense);
          console.log('Enemy Defense: ' + enemyDefense);
          console.log(player.defense[0]);
        }
      } else if (enemy2.isPicked === true){
        if (playerAttack > enemyDefense){
          //console.log('hi19aaaaaa');
          console.log('Player attack: ' + playerAttack);
          console.log('Enemy Defense: ' + enemyDefense);
          var newEnemyDefense = enemyDefense - playerAttack;
          enemy2.defense[0] = newEnemyDefense;
          console.log('New Enemy Defense: ' + newEnemyDefense);
          console.log('New Enemy Array Defense: ' + enemy2.defense[0]);
        } else if (playerAttack < enemyDefense) {
          console.log('You Lost Fight. You dfense will take a hit.');
          console.log('Player attack: ' + playerAttack);
          console.log('Enemy Defense: ' + enemyDefense);
          var newPlayerDefense = playerDefense - 10;
          player.defense[0] = newPlayerDefense;
          console.log('New Player Defense: ' + newPlayerDefense);
          console.log('Enemy Defense: ' + enemyDefense);
          // console.log(player.defense[0]);
        }
      } else if (enemy3.isPicked === true){
        if (playerAttack > enemyDefense){
          //console.log('hi19bbbbbbb');
          console.log('Player attack: ' + playerAttack);
          console.log('Enemy Defense: ' + enemyDefense);
          var newEnemyDefense = enemyDefense - playerAttack;
          enemy3.defense[0] = newEnemyDefense;
          console.log('New Enemy Defense: ' + newEnemyDefense);
          console.log('New Enemy Array Defense: ' + enemy3.defense[0]);
        } else if (playerAttack < enemyDefense) {
          console.log('You Lost Fight. You dfense will take a hit.');
          console.log('Player attack: ' + playerAttack);
          console.log('Enemy Defense: ' + enemyDefense);
          var newPlayerDefense = playerDefense - 10;
          player.defense[0] = newPlayerDefense;
          console.log('New Player Defense: ' + newPlayerDefense);
          console.log('Enemy Defense: ' + enemyDefense);
          console.log(player.defense[0]);
        }
      }

      ///////run enemy counter attack
      enemyCounterAttack(enemyAttack);
      return;
  }
//////enemy counter player attack. this runs after random attack.
function enemyCounterAttack(enemyAttack){
  //console.log('hi26');
  playerCounterDefense = player.defense[0];
  //console.log(playerCounterDefense);
  if (playerCounterDefense > enemyAttack){
    ////give enemy inventory to player
    if (enemy1.isPicked === true){
      var enemy1Inventory = enemy1.inventory[0];
      console.log('Your Defese:' + playerCounterDefense);
      console.log('Enemy Attack:' + enemyAttack);
      //console.log('hi21');
      console.log('You win fight!');
      console.log('Your prize: '+ enemy1Inventory);
      player.inventory.push(enemy1Inventory);
    } else if (enemy2.isPicked === true){
      var enemy2Inventory = enemy2.inventory[0];
      console.log('Your Defese:' + playerCounterDefense);
      console.log('Enemy Attack:' + enemyAttack);
      //console.log('hi21');
      console.log('You win fight!');
      console.log('Your prize: '+ enemy2Inventory);
      player.inventory.push(enemy2Inventory);
    } else if (enemy3.isPicked === true){
      var enemy3Inventory = enemy3.inventory[0];
      console.log('Your Defese:' + playerCounterDefense);
      console.log('Enemy Attack:' + enemyAttack);
      //console.log('hi21');
      console.log('You win fight!');
      console.log('Your prize: '+ enemy3Inventory);
      player.inventory.push(enemy3Inventory);
    }

  } else if (playerCounterDefense < enemyAttack){
    console.log('Your Counter Defese:' + playerCounterDefense);
    console.log('Enemy Attack:' + enemyAttack);
    //console.log('hi22');
    console.log('player lost');
    var counterLoss = readline.question('Press Print to see your inventory and player health');
    if (counterLoss === 'Print'){
      console.log(player);
      return;
    } else {
      return;
    }
    var playAgain = readline.question('Would you like to play again? if yes type y')
      if (playAgain  === 'y'){
        //onsole.log('BBBBBBBB');
        getRandomInt();
      } else {
        return;
      }
    ///player loses
    //////if player defense = 0 player is dead
    ///////if not ask to play again
    ////if no quit
    //////if yes run getRandomInt
    var newPlayerDefense = playerDefense - 10;
    player.defense[0] = newPlayerDefense;
    console.log('Your new Defense:' + newPlayerDefense);
  }

  return;
}

  ///////
  ///////
 /////This is the enemy counter to player runnning

 function enemyCounterRun() {
   //console.log('OOOOOOOOO');
   var randRunMax = 100;
   var randRunMin = 1;
   playerDefense = Math.floor(Math.random() * (randRunMax - randRunMin + 1)) + randRunMin;
   enemyCounterRunNum = Math.floor(Math.random() * (randRunMax - randRunMin + 1)) + randRunMin;
   console.log('Enemy Counter Attack to Run: ' + enemyCounterRunNum);
   console.log('Player Defense: ' + playerDefense);
   var newPlayerDefense = playerDefense - enemyCounterRunNum;
   var counterRun = readline.question('Would you like to play again? if yes type y')
   if (counterRun === 'y'){
     console.log('Jjjjjjjj');
     getRandomInt();
   } else {
     return;
   }
 }

//////player runs. random number generated that decdides the player run numer
///////from 2 numbers thus 50% chance to get away or get caught,

function randomRunning() {
  // enemy3.run.length = 0;
  // enemy2.run.length = 0;
  // enemy1.run.length = 0;
  //console.log('hi18');
    var randRun = Math.floor(Math.random()*2)
    playerRun(randRun);
    return;
}
function playerRun(randRun){
  //console.log('hi19');
  if (randRun = 0 ){
    console.log('Random Number: ' + randRun);
    console.log('You escaped');
    var d = readline.question('Would you like to play again? if yes type y')
    if (d === 'y'){
      //console.log('hi20');
      getRandomInt();
    } else {
      return;
    }
  } else if (randRun = 1){
    //console.log(rand);
    console.log('You got caught!');
    ////run enemyCounterrun
    //console.log('hi16');
    enemyCounterRun();
    return;
  }
}//////after this loop stops


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
