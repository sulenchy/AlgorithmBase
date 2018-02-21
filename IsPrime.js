/* Write Code Here */
function isPrime(arg){
    let count = 0;
    for (let i=1; i <= arg; i++){
        if(arg  % i === 0){
          count ++;
      }
    }
    return count == 2? true:false;
  }
  
  
  
  
  
  
  
  
  
  
  
  //EXAMPLE TESTS
  
  console.log(isPrime(5)); 
  //OUTPUT: true
  
  console.log(isPrime(10));
  //OUTPUT: false