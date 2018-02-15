// changes Underscore argument to CamelCase argument
function underToCamel(arg){
  let response='';
  for (let i=0; i < arg.length; i++){
    if(arg[i] !== '_'){
       response += arg[i];
    }else{
      response += arg[i+1].toUpperCase();
      i++;
    }
  }
  
  return response;
}








//EXAMPLE TESTS

console.log(underToCamel("first_name"));
//OUTPUT: "firstName"

console.log(underToCamel("my_income_tax_from_2015"));
//OUTPUT: "myIncomeTaxFrom2015"