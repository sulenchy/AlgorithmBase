/* Write Code Here */

function properNounFilter(arg){
    let count = 0;
   for (let i=0; i< arg.length; i++){
     
     if (arg[i] === arg[i].toUpperCase() && arg[0] === arg[0].toUpperCase() ){
         count ++;
     }
   }
    console.log(count);
    return count == 1? true : false;
  }
  
  
  
  
  
  
  
  
  
  //EXAMPLE TESTS
  
  console.log(properNounFilter('coffee'));
  // OUTPUT: false
  
  console.log(properNounFilter('Einstein'));
  // OUTPUT: true
  
  console.log(properNounFilter('ApoLLo'));
  // OUTPUT: false