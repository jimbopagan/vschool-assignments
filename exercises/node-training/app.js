require('./instantHello');
var goodbye = require('./talk/goodbye');
var talk = require('./talk');//it will first look for a file in same folder called talk.js and then look for a folder called talk and in there a file called index.js that is why we dont add index in the require.
var question = require('./talk/question');

talk.intro();

talk.hello('Jimmy');

var answer = question.ask('What is the meaning of life?');
console.log(answer);

goodbye();
