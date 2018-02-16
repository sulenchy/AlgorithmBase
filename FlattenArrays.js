
function flatten(arrArg){
    let arr = [];
    arrArg.forEach(function(x){
      if (typeof x === 'object'){
         x.forEach(function(y){
           arr.push(y);
         });
      }else{
            arr.push(x);
          }
            
    });
    return arr;
  }
  //EXAMPLE TEST
  
  console.log(flatten([1,[2,3],4]));
  // OUTPUT: [1,2,3,4];