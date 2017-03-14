var arr=[];
$('#getData').click(function(){
  $.get('http://api.vschool.io:6543/pokemon.json', function (pokemon){
    for(var i =0; i < pokemon.objects[0].pokemon.length; i++ ){
      var poke = pokemon.objects[0].pokemon[i];
      arr.push(poke);
      // console.dir(pokemon.objects[0].pokemon[i]);
    }
    for (var j = 0; j < arr.length; j++){
      console.log(arr[j].name)
    }
    // console.log()
    // console.dir(pokemon)
  })
})
