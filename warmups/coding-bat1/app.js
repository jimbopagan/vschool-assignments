var diff = function(n){
	if (n<=21){
    return Math.abs(n-21);
    } else if (n>=21){
    return Math.abs(2*(n-21));
    }
}

console.log(diff(21));
console.log(diff(42));
console.log(diff(2));
