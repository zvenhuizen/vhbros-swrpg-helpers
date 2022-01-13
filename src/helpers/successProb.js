const successProb = (probObject) => {

    console.log("PROBABILITY OBJECT")
    console.log(probObject);
    let sucDec, fOdds;
    let sucPct = '--.--';
    let successMatrix = [];
    let failureMatrix = [];
    let oddsMatrix = [];

    if(probObject.successProb.length === undefined) { 
        //if there are no success-driven dice entered, 0% of success.

        sucPct = '00.00';
    } else if(probObject.failureProb.length === undefined) { 
        //if there are no failure-driven dice entered, success is 1 minus % chance of rolling 0 success
        //chance of rolling 0 success is index [0] of the successMatrix
    
        sucPct = ((1 - probObject.successProb) * 100).toFixed(2);
    } else {
        //if there are both success-driven and failure-drive dice entered, calculate odds of success

        successMatrix = probObject.successProb;
        failureMatrix = probObject.failureProb;

        let initialLength = successMatrix.length
        for(var s = 1; s < initialLength; s++) {

            successMatrix.splice(0, 1); //create new matrix by removing first 's' indices from successMatrix
            let sOdds = successMatrix.reduce((result, number)=> result + number,0); //odds of rolling s+ successes

            if(s - 1 >= failureMatrix.length) {
                //if it is not possible to roll exactly 1 less failure than 's' successes, then set fOdds to 0

                fOdds = 0;
            } else {
                //odds of rolling exactly 1 fewer failures than 's' successes

                fOdds = failureMatrix[s - 1];
            }

            let finalOdds = fOdds * sOdds; //multiply the total odds of success by odds of one less failure

            oddsMatrix.push(finalOdds);
        }
        
        sucDec = oddsMatrix.reduce((result, number)=> result + number,0);
        sucPct = (sucDec * 100).toFixed(2);
    }

    return sucPct;
}

export default successProb;