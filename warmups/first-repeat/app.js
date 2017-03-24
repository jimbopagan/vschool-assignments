function firstRepeat (str){
  for(var i=0; i <=str.length; i++){
    if (str[i] != str[i+1] && str[i+1] != str[i+2]){
      return str[i+1]
    }
  }
}
firstRepeat("ggggxxggggljfvlsjkfg");
