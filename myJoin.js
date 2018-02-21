/* Write Code Here */

function myJoin(arg1, arg2){
    let arr = '';
     if(arg1 == []){
         return arr;
     }
     if(arg2 == undefined){
       
       for (let i =0; i < arg1.length; i++){
         if(i == arg1.length -1){
           arr = arr + arg1[i];
         }else{
           arr = arr + arg1[i];
           arr = arr + ',';
         }
       }
       return arr;
    }else{
      for (let i =0; i < arg1.length; i++){
         if(i == arg1.length -1){
           arr = arr + arg1[i];
         }else{
           arr = arr + arg1[i];
           arr = arr + arg2;
         }
       }
       return arr;
    }
   }
   
   
   
   
   
   
   
   
   
   //EXAMPLE TESTS
   
   console.log(myJoin(['hello', undefined, 'world'], ' '));
   // OUTPUT: 'hello world'
   console.log(myJoin([2, "be", false]));
   // OUTPUT: '2,be,false`