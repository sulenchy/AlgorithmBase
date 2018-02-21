/* Write Code Here */

function totalPortfolioValue(ticker, portfolio){
    let total =0; 
     for (let i=0; i< portfolio.length; i++){
       let key = portfolio[i][0];
       total += ticker[ticker.indexOf(key)+1] * portfolio[i][1];
     }
     return total;
   }
   
   
   
   
   
   
   
   
   
   
   
   
   
   //EXAMPLE TESTS
   
   var ticker = ['ABC', 10, 'XYZ', 200, 'BBB', 5];
   var portfolio = [['XYZ', 20], ['BBB', 10]];
   
   console.log(totalPortfolioValue(ticker, portfolio));
   //OUTPUT: 4050