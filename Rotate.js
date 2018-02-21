/* Write Code Here */
function rotate(arg1,arg2){
    if (arg2 === 0 || arg2 === arg1.length){
   return arg1;
 }else{
 //return arg1.slice(arg2,arg1.length);
   let arr = arg1.slice(arg2,arg1.length);
     return arr.concat(arg1.slice(0,arg1.length-arg2));    
 }
}











//EXAMPLE TESTS

rotate([22, 11, 500, 92], 2);
//Output: [500, 92, 22, 11]