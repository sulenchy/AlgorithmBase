function sumMultiplyAndRound(arg1,arg2,arg3){
	let result = Math.floor(arg1+arg2);
  result = result * arg3;
  return result;  
}








//EXAMPLE TESTS

console.log(sumMultiplyAndRound(2, 3.5, 6.2))
//OUTPUT: 31