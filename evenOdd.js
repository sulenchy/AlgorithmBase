/* Write Code Here */

function evenOdd(arg){
	let evenNumber=[];
  let oddNumber = [];
  for (let i=0; i < arg.length; i++){
  	if (arg[i] % 2 == 0){
     evenNumber.push(arg[i]); 
    }else{
      oddNumber.push(arg[i]); 
    }
  }
  return [evenNumber,oddNumber];
}









//EXAMPLE TEST

console.log(evenOdd([1,2,3,4,5,6]));
// OUTPUT: [ [2,4,6], [1,3,5] ]