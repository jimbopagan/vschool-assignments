function Party (name, population){
  this.population = population;
  this.name = name;
}
var penguins = new Party('penguins', 1000000000);
var communists = new Party('communists', 1000000000);

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var rand = Math.floor(Math.random() * (max - min + 1)) + min;
  return rand
}

function randomPartyAttacked(){
  var rand = getRandom(1,2);
  if(rand === 1){
    console.log('The communists are attacking');
    sendNuke(penguins, onHit, onMiss);
    return penguins;

  } else if (rand === 2){
    console.log('The penguins are attacking');
    sendNuke(communists, onHit, onMiss);
    return communists;
  }
}

function onHit(party){
  var numHit = getRandom(0, 1000000);
  return numHit;
}

function onMiss(party){
  var numMiss = getRandom(0, 1000000);
  return numMiss;
}

function sendNuke(party, onHit, onMiss){
  var attackSucessful = Math.random();
  if (attackSucessful > .5){
    var totalHit = onHit(party);
    if(party.name === 'penguins'){
      communists.population = communists.population - totalHit;
    } else {
      penguins.population = penguins.population - totalHit;
    }

  } else {
    var totalMiss = onMiss();
    if(party.name === 'penguins'){
      sendNuke(communists, onHit, onMiss);
    } else {
      sendNuke(penguins, onHit, onMiss);
    }
  }
}
var toggleParty = randomPartyAttacked();
while(communists.population > 0 && penguins.population > 0){
  if (toggleParty === 'communists'){
    toggleParty === 'penguins';
  } else {
    toggleParty === 'communists'
  }
}
