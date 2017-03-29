


function arrayDivider(arr){
    var arrObjects = {
    string:[],
    number:[],
    object:[],
    boolean:[],
}
    for(i=0; i<arr.length; i++){
        if(typeof(arr[i]) === 'string'){
           arrObjects.string.push(arr[i]);
           } else if (typeof(arr[i]) === 'number'){
               arrObjects.number.push(arr[i]);
           } else if (arr[i] instanceof Array){
               arrObjects.number.push(arr[i]);
           } else if (typeof(arr[i]) === 'object'){
               arrObjects.object.push(arr[i]);
           } else if (typeof(arr[i]) === 'boolean'){
               arrObjects.boolean.push(arr[i]);
           } 
        
    }
    console.log(arrObjects)
}
arrayDivider(["cat", [1, 2 ,3], "dog", 1, 4, true, false, {name: "john"}, ["pie", "cake"]])


