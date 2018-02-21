/* Write Code Here */

function removeZeros(arg){
    if (arg === 0){
        return NaN;
    }
   let numString = String(arg);
   let res = '';
    for (let i=0; i< numString.length; i++){
      if (numString[i] !== '0'){
        res = res + numString[i] ;
      }
    }
    return Number(res);
  }
  
  
  
  
  
  
  
  
  
  
  //EXAMPLE TESTS
  
  console.log(removeZeros(6006606.203));
  //OUTPUT: 6666.23
  
  console.log(removeZeros(0));
  //OUTPUT: NaN