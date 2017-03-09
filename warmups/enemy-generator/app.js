var type = ['Ancient Dragon', 'Prowler', 'Mighty Grunt']
var totalEnemies = [];

function Enemy(points, defense, type ) {
    this.points = points;
    this.defense = defense;
    this.enemyType = type;
    }

//Random Points Generator
function hitPoints(rand){
  if (type === 'Ancient Dragon'){
    return Math.random() * (100 - 80) + 80;
  } else if (type === 'Prowler'){
    return Math.random() * (79 - 50) + 50;
  } else if (type === 'Mighty Grunt'){
    return Math.random() * (49 - 20) + 20;
  }
}


//Random Enemy Generator
function randomEnemy(){
  var rand = type[Math.floor(Math.random() * type.length)];
  return rand;
}


//defense Generator
function enemyDefense(randomPoints){
  var defense = randomPoints * 3;
  return defense;
}


for (var i=0; i<= 100; i++){
  var randomPoints = hitPoints();
  var enemyGenerator = randomEnemy();
  var defenseGenerator = enemyDefense(randomPoints);
  var enemy1 = new Enemy(randomPoints , defenseGenerator, enemyGenerator);
  totalEnemies.push(enemy1);
  console.log(enemy1);
}
