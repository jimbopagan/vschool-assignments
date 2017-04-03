// Given a string, return a version without both the first and last char of the
// string. The string may be any length, including 0.
var str1 = [];
var str2=[];
var withoutEnd2=function(str) { 
    for(var i = 0; i <str.length; i++){
        if((i === 0) || (i === str.length - 1)){
           str1.push(str[i])
        } else if ((i !== 0) || (i !== str.length - 1)){
            str2.push(str[i])
        }
    }
    var str3 = str2.toString();
    var str4 = str3.replace( /,/g, "" );
    console.log(str4);

}
withoutEnd2('hello from the planet mars!')