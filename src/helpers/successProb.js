const successProb = (probObject) => {

    console.log("PROBABILITY OBJECT")
    console.log(probObject);

    let sucDec, failureProb, successProb;
    let sucPct = '--.--';
    let successMatrix = probObject.successProb;
    let failureMatrix = probObject.failureProb;
    let oddsMatrix = [];

    if(successMatrix.length === undefined) { 
        //if there are no success-driven dice entered, 0% of success.

        sucPct = '00.00';

    } else if(failureMatrix.length === undefined) { 
        //if there are no failure-driven dice entered, success is 1 minus % chance of rolling 0 success
        //chance of rolling 0 success is index [0] of the successMatrix
    
        sucPct = ((1 - probObject.successProb) * 100).toFixed(2);

    } else {
        //if there are both success-driven and failure-drive dice entered, calculate odds of success

        let initialLength = successMatrix.length
        for(var s = 1; s < initialLength; s++) {

            successMatrix.splice(0, 1); //create new matrix by removing first 's' indices from successMatrix
            successProb = successMatrix.reduce((result, number)=> result + number,0); //odds of rolling s+ successes

            if(s - 1 >= failureMatrix.length) {
                //if it is not possible to roll exactly 1 less failure than 's' successes, then set failureProb to 0

                failureProb = 0;
            } else {
                //odds of rolling exactly 1 fewer failures than 's' successes

                failureProb = failureMatrix[s - 1];
            }

            let finalProb = failureProb * successProb; //multiply the total odds of success by odds of one less failure

            oddsMatrix.push(finalProb);
        }
        
        sucDec = oddsMatrix.reduce((result, number)=> result + number,0);
        sucPct = (sucDec * 100).toFixed(2);
    }

    return sucPct;
}

export default successProb;