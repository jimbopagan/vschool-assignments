
var total = document.getElementById('totalButton');
total.onclick = function(){

    var bad1 = document.getElementById("goomba");
    // console.dir(bad1);
    var badNum = parseInt(bad1.value);
    console.log(badNum);
    var bad2 = document.getElementById("bob-ombs");
    var badNum2 = parseInt(bad2.value);
    var bad3 = document.getElementById("cheep-cheeps");
    var badNum3 = parseInt(bad3.value);
    var totalSum = document.getElementById("total");
    totalSum.value = (badNum * 5) + (badNum2 * 7)+ (badNum3 * 11);
}
