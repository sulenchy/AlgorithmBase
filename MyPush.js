/* Write Code Here */

function myPush(arg1,arg2){
    arg1[arg1.length] = arg2;
    return arg1;
  }  
  
  
  //EXAMPLE TESTS
  
  console.log(myPush([1, 2, 3], 4));
  //Output: [1, 2, 3, 4] 