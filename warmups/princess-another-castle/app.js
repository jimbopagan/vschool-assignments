function getRandomInt(min, max) {
  var rand = Math.floor(Math.random() * (max - min + 1)) + min;
    return rand;
}
function action(){
  var random = getRandomInt(0,3);
  if (random === 0){
    player.gotHit();
  } else if (random === 1){
    player.gotPowerUp();
  } else if (){
    player.addCoin();
  }
}


var player = {
  name = 'Mario',
  totalCoins = 0,
  status = 'small',
  isStar = false,
  setName: function(namePicked){
    if (namePicked === 'Mario'){
      this.name = 'Mario';
    } else (namePicked === 'Luigi'){
      this.name = 'Luigi';
    }
  },
  gotHit: function (){
    if(this.status === 'Powered Up'){
      this.status = 'Big';
    }else if (this.status === 'Big'){
      this.status = 'Small';
    } else if (this.status === 'Small'){
      this.status = 'Dead';
    }else if (this.status === 'Dead'){

    }

  },
  gotPowerUp: function (str){
    if (this.status  === 'Small'){
      this.status = 'Big';
    } else if (this.status  === 'Big'){
      this.status = 'Powered Up';
    }
  },
  gameActive: true;
  addCoin: function (){
    this.totalCoins ++;
  },
  print: function(){
    var starMessage = 'dont have a star';
    if (this.isStar) starMessage = 'do have a star'
    console.log(`The character name is : ${this.name}, and you have ${this.totalCoins} and are ${this.status}, and you are ${starMessage} `);
  }
}
