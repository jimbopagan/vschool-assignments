document.getElementById('button').addEventListener('click', function(){
  var form = document.getElementById('form');
  var name = form.fname.value;
  var lastName = form.lname.value;
  var age = form.age.value;
  var gender = form.gender.value;
  var place = form.myPlace.value

  var myFood = [];

  for (var i =0; i< form.foods.length; i++){
    if (form.foods[i].checked){
      myFood.push(form.foods[i].value)
    }
  }

  var formOutput = `The name is ${name}
   Last name: ${lastName}
   Age: ${age}
   Gender:${gender}
   Location:${place}
   Dietary restrictions:${myFood}`;
  alert(formOutput);
})
