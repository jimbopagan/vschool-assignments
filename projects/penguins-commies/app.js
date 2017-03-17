function Party (name, population){
  this.population = population;
  this.name = name;
}
var goodGuys = new Party('Penguins', 1000000000);
var badGuys = new Party('Communists', 1000000000);

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomIntInclusive(1,2)
function sendNuke(party, onHit, onMiss){

}
