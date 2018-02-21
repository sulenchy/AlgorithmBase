/* Write Code Here */
function changeKeys(keysToChange, steps) {
    //Here is the chromatic scale--you will need to use this in your function!
    var keys = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
    let arr = [];
    for (let i =0; i < keysToChange.length; i++){
        let index = keys.indexOf(keysToChange[i]) + steps;
      if (index < keys.length-1){
        arr.push(keys[index]);
      }else{
        arr.push(keys[index - keys.length]);
      }
    }
    return arr;
  }
  
  
  //EXAMPLE TESTS
  
  console.log(changeKeys(['E', 'F'], 1));
  // OUTPUT: ['F', 'F#']
  
  console.log(changeKeys(['G'], 5));
  // OUTPUT: ['C']
  
  
  