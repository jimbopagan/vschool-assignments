var fs = require('fs');

console.log('Going to get a file');
var file = fs.readFileSync('readFileSync.js');
console.log('Go to the file');

console.log('app continues...');