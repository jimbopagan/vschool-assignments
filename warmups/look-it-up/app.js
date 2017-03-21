// function Dictionary (word, definition){
//   this.word = word;
//   this.definition = definition;
// }
//
// var dictionary = {};
//
// function addWord (word, definition){
//     word = word.toLowerCase;
//     dictionary[word] = definition;
// }
//
function findWords(word){
  if (dictionary[word] === undefined){
    console.log('this word not in dictinary yet')
  } else {
    return dictionary[word];
  }
}
// console.log(findWords('cat'))


/////with constructor
function Dictionary (word, definition){
  this.word = word;
  this.definition = definition;
}
var newWord = new Dictionary(word, definition);

var dictionary = {};

function addWord (word, definition){
    word = word.toLowerCase;

    // Dictionary.word = Dictionary.definition;
}
addWord('dog', 'an animal');
console.log(Dictionary.word + ':' + Dictionary.definitona)
