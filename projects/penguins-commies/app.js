function Party (name, population){
  this.population = population;
  this.name = name;
}
var penguins = new Party('penguins', 1000000);
var communists = new Party('communists', 1000000);

function randomPartyAttacked(){
  var rand = Math.random();
  console.log(rand);
  if(rand >= .5){
    console.log('The communists are attacking');
    sendNuke(penguins, onHit, onMiss);
    return 'penguins';

  } else if (rand < .5){
    console.log('The penguins are attacking');
    sendNuke(communists, onHit, onMiss);
    return 'communists';
  }
}

function onHit(party){
  max=1000000;
  min =1;
  var numHit = Math.floor(Math.random() * (max - min + 1)) + min;
  return numHit;
}

function onMiss(party){
  console.log('The attack missed! ' + party);
}

function sendNuke(party, onHit, onMiss){
  var attackSucessful = Math.random();
  if (attackSucessful >= .5){
    var totalHit = onHit(party);
    if(party.name === 'penguins'){
      penguins.population = penguins.population - totalHit;
      console.log(`The communists hit the penguins for ${totalHit} leaving them with ${penguins.population} soldiers left`);
    } else if (party.name === 'communists'){
      communists.population = communists.population - totalHit;
      console.log(`The penguins hit the communists for ${totalHit} leaving them with ${communists.population} soldiers
 left`);
    }

  } else if (attackSucessful < .5){
    // console.log(`The attack on ${party.name} missed!`);
        onMiss(party.name);
  }
}
var toggleParty = randomPartyAttacked();
while(communists.population > 0 && penguins.population > 0){
  if (toggleParty === 'communists'){
    toggleParty = 'penguins';
    sendNuke(penguins, onHit, onMiss);
  } else if (toggleParty === "penguins"){
    toggleParty = 'communists';
    sendNuke(communists, onHit, onMiss);

  }
}
