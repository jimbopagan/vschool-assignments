var dogFriends = {
  name: 'Lucy',
  age: 6,
  isBad: true,
  dogGang:['Killer Petz', 'Destroyers', 'Barkers'],
  wanted: function(){
    for (var i = 0; i < dogFriends.friends.length; i++){
      if (this.friends[i].isBad === false){
        console.log('This is a good pet');
      } else {
        console.log("This is probably a bad pet");
      }
    }
  },
  friends: [
    {
      name:'misha',
      age: 9,
      isBad: false,
      dogGang: ['Killer Fluffs', 'West side bad breath']
    },
    {
      name:'tribe',
      age: 13,
      isBad: false,
      dogGang: ['Angels']
    },
    {
      name:'daytona',
      age: 7,
      isBad: true,
      dogGang: ['Claws', 'Bird Killa']
    },
      {
      name:'chief',
      age: 7,
      isBad: false,
      dogGang: ['Claws', 'Bird Killa', 'King of the House', 'Killer Fluffs', 'West side bad breath', 'Killer Petz', 'Destroyers', 'Barkers']
    },
  ]
}


dogFriends.friends[0].isWhiny = true;
dogFriends.friends[0].nicknames = ['fluff', 'meeps']
dogFriends.friends[1].dogGang.push('Granpas', 'The boyz');
console.log(dogFriends.friends[0]);
console.log(dogFriends.friends[1]);
dogFriends.wanted();
