//function makeMoney(n) {
//    var str = String.valueOf(n);
//    var i = n.length;
//    var total = '';
//    for (i <= str.length; i >= 0; i--) {
//        total += total + str[i];
//         console.log(typeof total)
////        if (i === (str.length - 2)) {
////            var period = '.';
////            var total = total + str[i].concat(period)
////            return total;
//
//        }
////        str1.concat(str[i]);
////        var dollar = '$';
////        var totalTotal = total + dollar.concat(str1)
//    }
//
////    console.log(totalTotal)
//    //    var str = String.valueOf(n);
//    //    var moneySign = '$';
//    //    var res = str.concat(moneySign);
//    //    console.log(res);
////}
//makeMoney(123456789);

function formatMoney(num){
    return (num/100).toLocaleString('en-US', {style:'currency', currency:''})
}
console.log(formatMoney(123456789))