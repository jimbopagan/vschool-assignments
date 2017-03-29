var arr=[];
var arr1=[];
var junk =[];
function arrayReverse(str){
  for(var i =0; i<str.length; i++){
    arr.push(str[i]);
  }
  var reversed = arr.reverse();
  arr1.push(reversed);

  arr1.forEach(function(string){

    if(string === ',' || string === ' '){
      junk.push(string);
    } else {
      // var string = arr1.toString();
      var total = arr1.join('')
      console.log(total);
    }

  })

}
arrayReverse('hello my name is jimmy');
//
//
// var arr=[];
// function arrayReverse(str){
//   for(var i =0; i<str.length; i++){
//     arr.push(str[i]);
//   }
//   var reversed = arr.reverse();
//
//   var string = reversed.join('');
//   // var string = reversed.toString();
//   console.log(string)
// }
// arrayReverse('hello my name is jimmy');
//
// var arr =[];
// function arrayReverse (str){
//   for (var i=0 ; i<str.length; i++){
//     arr.push(str[i]);
//   }
//   var reversed = arr.reverse();
//   var string = reversed.join('');
//   console.log(string)
// }
// arrayReverse('hi my name is jimmy');
