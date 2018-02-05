function playNameGame(arg){
    let arr = ['A','E','I','O','U'];
    if(arr.indexOf(arg[0]) === -1){
      return arg + ' ' + arg + ' Bo' + ' ' + 'B' + arg.slice(1,arr.length+1) + ' ' +'Banana ' + 'Fana ' + 'Fo ' + 'F' + arg.slice(1,arr.length+1) + ' Fee Fi Mo' + ' ' + 'M' + arg.slice(1,arr.length+1)+ ' ' + arg;
    }else{
      return arg + ' ' + arg + ' Bo' + ' ' + 'B' + arg.toLowerCase() + ' ' +'Banana ' + 'Fana ' + 'Fo ' + 'F' + arg.toLowerCase() + ' Fee Fi Mo' + ' ' + 'M' + arg.toLowerCase()+ ' ' + arg;
    }
  }
  
  
  
  
  
  console.log(playNameGame('Ariel'));
  // OUTPUT: "Ariel Ariel Bo Bariel Banana Fana Fo Fariel Fee Fi Mo Mariel Ariel"