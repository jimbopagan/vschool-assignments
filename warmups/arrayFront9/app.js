// Given an array of ints, return true if one of the first 4 elements in 
// the array is a 9. The array length may be less than 4
 
var arrayFront9 = function(nums){ 
for (var i=0; i<4; i++){
    if (nums[i] === 9){
        return true;
    } 
} return false
}
console.log(arrayFront9([1,2,3,9,5,7,9]));
console.log(arrayFront9([1,2,3,5,7,9]));
console.log(arrayFront9([9,2,3,9,5,7,9]));
console.log(arrayFront9([9,2]));
console.log(arrayFront9([1,2]));