var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";

var total = [];
function inception (person, alpha){
  for(var i=0; i<people.length; i++){
    var guy = person[i];
    total.push(guy)
    for (var j=0; j<alphabet.length; j++){
      var letter = alpha[j];
      total.push(letter.toUpperCase())
    }
    var first = total.splice(0, 27);
    console.log(first);
  }
}
inception(people, alphabet);
