/* Write Code Here */

function sumOfDigits(arg){
  let sum = 0;
  if(arg === undefined){
      return sum
    }else{
        let str = arg.toString(); 	
        let strLen = str.length;
        for(var i=0; i< strLen; i++){
            sum += Number(str[i]);
        }
        return sum
    }
}



//EXAMPLE TESTS

console.log(sumOfDigits(414));
//OUTPUT: 9

console.log(sumOfDigits());
//OUTPUT: 15