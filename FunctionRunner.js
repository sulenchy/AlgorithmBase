/* Write Code Here */

// higher order function
function functionRunner(func,funcArg ){
    return func(funcArg);
  }
  
  
  
  
  
  
  
  
  //EXAMPLE TEST
  
  function squareNum(x) { 
    return x*x;
  }
  
  console.log(functionRunner(squareNum, 4));
  // OUTPUT: 16