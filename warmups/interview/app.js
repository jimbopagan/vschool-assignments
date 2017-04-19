

function makeArrayOfObjects(arr1, arr2) {
    var total = [];
   for (i = 0; i < arr1.length; i++) {
       var object = {
           first: 0,
           second: "name"
       }
       object.first = arr1[i];
       object.second = arr2[i];
       total.push(object);
   }

   console.log(total);
   }
makeArrayOfObjects([4, 2, 5, 8], ["Sean", "Jared", "Marcy", "Mary"])
//=> [
//    {first: 4, second: "Sean"},
//    {first: 2, second: "Jared"},
//    {first: 5, second: "Marcy"},
//    {first: 8, second: "Mary"}
//]

//Ambitious option. The function takes 2 arrays AND two strings.
//The properties of the outputted objects will be those strings
//makeArrayOfObjects([4, 2, 5, 8], ["Sean", "Jared", "Marcy", "Mary"], "age", "name") 
//=> [
//    {age: 4, name: "Sean"},
//    {age: 2, name: "Jared"},
//    {age: 5, name: "Marcy"},
//    {age: 8, name: "Mary"}
//]

//write a function that takes an object and makes an array out of its values.
//makeArrayFromObject({name: "Jessica", age: 32, hobbies: ["dance", "MMA"], homeTown: "Beaver"} );
//=> ["Jessica", 32, ["dance", "MMA"], "Beaver"]
//
//Ambitious option. Same as before, but the function takes one data type (string, object, number)
//and only returns those values of that type. If the input is object, it will return the objects and arrays.
//makeArrayFromObject({name: "Jessica", age: 32, hobbies: ["dance", "MMA"], homeTown: "Beaver"}, "string");
//=> ["Jessica", "Beaver"]