// The parameter weekday is true if it is a weekday, and the parameter vacation // is true if we are on vacation. We sleep in if it is not a weekday or we're on // vacation. Return true if we sleep in.

var sleepIn = function(weekday, vacation){ 
    if (weekday !== true && vacation !== false ){
        return true;
    } else{
        return false;
    }
}

console.log(sleepIn(true, false));
console.log(sleepIn(true, true));
console.log(sleepIn(false, false));
console.log(sleepIn(false, true));