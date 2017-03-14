var readline = require('readline-sync');
var greeting = readline.question('Greetings. You have just entered the realm of Bacon. To enter you must enter the word bacon');

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
  inventory:['Original Chicken Sandwich']
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
      console.log('hi6');
      console.log('Player you have been lucky enough to prance around bacon city without getting jacked for your bacon.')
      var fourth = readline.question('Want to play again Ding a Ling? if yes type y!');
      if (fourth === 'y'){
        //Initiate random num function
        console.log('hi7')
        getRandomInt();
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
      console.log(randomEnemyNum);
      console.log('hi11');
      enemyGenerator(randomEnemyNum);
      return;
  }
  function enemyGenerator (randEnemyNum){
    if (randEnemyNum >= 20 && randEnemyNum <= 30){
      console.log('Hey Punk, give me your bacon!!');
      var fifth = readline.question('You have came across and angered the most powerful boss in Bacon City. The Baconator. We will have to out a good fight to beat this boss. Type r to run; a to attack')
      if (fifth === 'a'){
        console.log('Ahh that is so cute....you have chosen to fight. Lets see what that bacon is made off. Good luck!');
        randomAttack();
      } else if (fifth === 'r'){
        console.log('You have chosen to run like the wuss you are!');
        randomRunning();
      }
      return;

    } else if (randEnemyNum >= 9 && randEnemyNum <= 19){
      console.log('hi13');
      console.log('Who do you think you are trotting that bacon around my territory?');
      var sixth = readline.question('Oh oh...The Whooper has taken some interest in our bacon. Type r to run; a to attack')
      if (sixth === 'a'){
        console.log('hi14');
        console.log('Fight? I thought ypou would run by the look of you. Anyhow.....Good luck!.....i guess.');
        randomAttack();
      } else if (sixth === 'r'){
        console.log('Run? Figures! Now go change your underwear');
        randomRunning();
      }
      return;

    } else if (randEnemyNum >= 1 && randEnemyNum <=10){
    console.log('hi15');
    console.log('Bacon?!? Bacon?!? I need bacon!.......can i smell you arm pits?');
    var seventh = readline.question('You have run in to none other than the Big MAc....he is a ghastly fellow after years of taking steroids and smoking crack...he wants two things. Your bacon and to smell your armpits. So what do you say? Type r to run; a to attack')
    if (seventh === 'a'){
      console.log('hi16');
      randomAttack();
    } else if (seventh === 'r'){
      console.log('hi17');
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
        console.log(playerAttack);
        console.log(enemyDefense);

        var newEnemyDefense = enemyDefense - playerAttack;
        enemy1.defense[0] = newEnemyDefense;
        console.log(enemyDefense);
        console.log(enemy1.defense[0]);
      } else if (playerAttack < enemyDefense) {
        console.log('hi20');
        console.log(playerAttack);
        console.log(enemyDefense);
        var newPlayerDefense = playerDefense - 10;
        player.defense[0] = newPlayerDefense;
        console.log(newPlayerDefense);
        console.log(enemyDefense);
        console.log(player.defense[0]);
      }
      ///////run enemy counter attack
      enemyCounterAttack(enemyAttack);
      return;
  }
//////enemy counter player attack. this runs after random attack.
function enemyCounterAttack(enemyAttack){
  console.log('hi26');
  playerCounterDefense = player.defense[0];
  console.log(playerCounterDefense);
  if (playerCounterDefense > enemyAttack){
    ////give enemy inventory to player
    if (){}
    // var enemy1Inventory = enemy1.inventory[0];
    console.log('Your Defese:' + playerCounterDefense);
    console.log('Enemy Attack:' + enemyAttack);
    console.log('hi21');
    console.log('You win fight!');
    console.log('Your prize:' + );
    ////ask to play again
    var playAgain = readline.question('Would you like to play again? if yes type y')
      if (playAgain  === 'y'){
        console.log('AAAAAAAAAA');
        getRandomInt();
      } else {
        return;
      }
    } else if (playerCounterDefense < enemyAttack){
    console.log('Your Counter Defese:' + playerCounterDefense);
    console.log('Enemy Attack:' + enemyAttack);
    console.log('hi22');
    console.log('player lost');
    var playAgain = readline.question('Would you like to play again? if yes type y')
      if (playAgain  === 'y'){
        console.log('BBBBBBBB');
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

 function enemyCounterRun(randRunMin, randRunMax) {
   var randRunMax = 100;
   var randRunMin = 1;
   console.log('hi23');
     playerRun = Math.floor(Math.random() * (randRunMax - randRunMin + 1)) + randRunMin;
     playerDefense = Math.floor(Math.random() * (randRunMax - randRunMin + 1)) + randRunMin;
     player.run[0]= playerRun;
     player.defense[0] = playerDefense;
     enemyRun = Math.floor(Math.random() * (randRunMax - randRunMin + 1)) + randRunMin;
     enemyDefense = Math.floor(Math.random() * (randRunMax - randRunMin + 1)) + randRunMin;

     console.log(enemyRun);
     console.log(enemyDefense);
     console.log(playerRun);
     console.log(playerDefense);
     if (playerRun > enemyDefense){
       console.log('hi24');
       var newEnemyDefense = enemyDefense - playerRun;
       enemy1.defense[0] = newEnemyDefense;
     } else if (playerRun < enemyDefense) {
       console.log('hi25');
       var newPlayerDefense = playerDefense - 10;
       player.defense[0] = newPlayerDefense;
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
    console.log(randRun);
    console.log('You escaped');
    var d = readline.question('Would you like to play again? if yes type y')
    if (d === 'y'){
      console.log('hi20');
      getRandomInt();
    } else {
      return;
    }
  } else if (randRun > .5){
    console.log(randRun);
    console.log('You got caught!');
    ////run enemyCounterrun
    console.log('hi16');
    enemyCounterRun();
    return;
  }
}//////after this loop stops
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
