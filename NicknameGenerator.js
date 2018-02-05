/* Write Code Here */

function nicknameGenerator(arg){
    let vowels = ['a','e','i','o','u'];
      if(vowels.indexOf(arg[2]) === -1){
         return arg.slice(0,3); 
    }
  }
  
  
  
  
  
  
  
  
  
  console.log(nicknameGenerator('Beowulf'));
  //OUTPUT: 'Beow'