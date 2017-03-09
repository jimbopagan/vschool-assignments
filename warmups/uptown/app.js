var lyrics = ["This", "hit", "that", "ice", "cold",
              "Michelle", "Pfeiffer", "that", "white",
              "gold", "This", "one", "for", "them",
              "hood", "girls", "Them", "good", "girls",
              "straight", "masterpieces", "Stylin'",
              "whilen'", "livin'", "it", "up", "in",
              "the", "city", "Got", "Chucks", "on",
              "with", "Saint", "Laurent", "Gotta", "kiss",
              "myself", "I'm", "so", "pretty"];


var arrayPrinter = function (arr){
    var str = arr.join (' ')
    console.log(str);
}

arrayPrinter(lyrics);
console.log('****************')

var secondFunk = function (arr){
    arr.reverse();
    console.log(arr.join(' '));
  }
secondFunk(lyrics);

console.log('****************')


var thirdFunk = function (arr){
  for (var i = 0; i < arr.length; i + 2){
    console.log(arr)
  }
}

thirdFunk('hello world')
