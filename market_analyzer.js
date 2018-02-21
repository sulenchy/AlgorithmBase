/*
 * Complete the function below.
 */
function market_analyze(price_arr) {
    let max = 0;
    let initial = price_arr[i];
    let maxLoop =0;
    let arr = [];
    for(let i=0; i < price_arr.length; i++){       
        maxLoop = price_arr[i] - initial;
        arr.push(maxLoop);
        initial = price_arr[i]
    }
    
    console.log(arr);
}

market_analyze([551, 553, 552, 548, 549, 548, 550, 552]);