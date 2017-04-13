// this func will count how many times a 6 or 7 is after a 6 in an array
 

var count = 0
var array667 = function(nums){ 
for (var i =0; i < nums.length; i++){
    if (nums[i] === 6){
        if(nums[i+1]=== 6 || nums[i+1]===7){
            count++;
        }
    }
}
    console.log(count);
   count = 0
}

array667([6,6,2]);	
array667([6,6,2,6]);
array667([6,7,2,6])	;
array667([6,6,2,7,6,7])	;
array667([1,6,3])	;
array667([6,1]);	
array667([]);	
array667([3,6,7,6])	;
array667([3,6,6,7])	;
array667([6,3,6,6]);	
array667([6,7,6,6]);
array667([1,2,3,5,6]);
array667([1,2,3,6,6]);