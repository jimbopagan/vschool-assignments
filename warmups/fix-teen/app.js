function noTeenSum(a, b, c){
  if ((a >= 15 && a <= 16) || (b >= 15 && b <= 16) || (c >= 15 && c <= 16)){
    var total = a + b + c;
    return console.log(total);
  } else if ((a >= 13 && a <= 19) || (b >= 13 && b <= 19) || (c >= 13 && c <= 19)){
    var first = a;
    var second = a;
    var third = a;
    check(first, second ,third);
  } else {
    var total = a + b + c;
    return console.log(total);
  }

}


function check (first, second, third){
  if (first >= 13 && first <= 19){
    first =0;
    var total = second + third;
    return console.log(total);
  } else if (second >= 13 && second<= 19){
    second =0;
    var total = first + third;
    return console.log(total);
  } else if (third >= 13 && third <= 19){
    third =0;
    var total = first + second;
    return console.log(total);
  }
}
// noTeenSum(1, 2, 3) ;
// noTeenSum(2, 13, 1);
noTeenSum(2, 1, 14);
// noTeenSum(2, 15, 14);
