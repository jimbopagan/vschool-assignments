var myString = function (str){
  for (var i =0; i < str.length; i++){
    console.log(str[i]);
  }
}
myString('Hello');

console.log('******************')

var mySingle = function (str, single){
  for (var i = 0; i< str.length; i++){
    if (str[i] === single){
      return i;
    }
  }
  return 'There was no ' + single + ' found'
}
console.log(mySingle('string', 'g'));
console.log(mySingle('string', 'n'));
console.log(mySingle('string', 'r'));
console.log(mySingle('string', 'w'));

console.log('******************')

// var nums = [1,2,3,3,4,7,9,44,55,88,99,42,55,88,21,27,26,77,99];
var myArray = function (nums){
  for (var i = 0; i < nums.length; i++){
    if (nums[i] === 42){
      return '42 found';
    }
  }
  return '42 not found';
}

console.log(myArray([1,2,3,3,4,7,9,44,55,88,99,55,88,21,27,26,77,99]));

console.log('******************')

//
var smallestNum = function (nums){
  var firstNum = nums[0];
  for (var i = 1; i < nums.length; i++){
    if (nums[i] > firstNum){
      continue;
    } else if (nums[i] <= firstNum){
      firstNum = nums[i];
    }
  } return firstNum;
}

console.log(smallestNum([4,7,9,44,55,88,99,55,1,88,21,27,26,77,99]));

console.log('******************')

//
// var evilCorp = function (str){
// var duplicateString = '';
// var notDuplicateString = '';
//
//   for (var i = 0; i< str.length; i++){
//     if (notDuplicateString.indexOf(str[i]) === -1){
//       notDuplicateString += str[i];
//     } else {
//       duplicateString += str[i];
//     }
//
//   }
// }

  //
  // for (var j = 0; j < str.length; j++){
  //     for (var i = 0; i < str.length; i++){
  //       var letter = str[0];
  //       if (str[i] != letter){
  //         notDuplicateString.push(str[i]);
  //       } else if (str[i] === letter){
  //         duplicateString.push(str[i]);
  //       }
  //     }
  //     console.log(duplicateString);
  //     console.log(notDuplicateString);
  //   }
  // }
// console.log(evilCorp('hello'));
// evilCorp('hello')
