const rollOdds = (probMatrix, resultsMatrix, typeOf) => {

    let oddsMatrix = [];
    let iterations, i, currentResult, probability, posneg;
    let qty = 0;
    let result = [];
    let resultsArray = [];
    let resultsValue = '';

    if (resultsMatrix.length > 0) {
        resultsArray = resultsMatrix[0];
        resultsValue = resultsArray[1];
    }

    if(typeOf === 'success' && resultsValue !== 'a') {
        result = resultsMatrix[0];
    } else if(typeOf === 'advantage' && resultsValue !== 'a') {
        result = resultsMatrix[1];
    } else if(typeOf === 'success') {
        result = undefined;
    } else if(typeOf ==='advantage') {
        result = resultsMatrix[0];
    }
    
    if(result !== undefined) {
        posneg = result[1]; //find whether the net roll was 's/a' or 'f/t'
    } else { 
        posneg = ''
    }

    let positiveMatrix = []
    if(probMatrix[0] === 1) {
        positiveMatrix = [1];
    } else {
        positiveMatrix = probMatrix[0];
    }

    let negativeMatrix = [];
    if(probMatrix[1] === 1) {
        negativeMatrix = [1];
    } else {
        negativeMatrix = probMatrix[1];
    }

    //calculate total possible successes/advantage and total possible failures/threats
    let possiblePos = positiveMatrix.length - 1
    let possibleNeg = negativeMatrix.length - 1

    switch(posneg) {
        case 's':
        case 'a':
            //odds of netting 'qty' successes is equal to:
            //sum of((odds of each # of possible successes/advantage) * (odds of rolling # - n failures/threats) )

            qty = result[0]; //find net qty of 's/a' or 'f/t' rolled

            iterations = (possibleNeg + 1) - (Math.max(0,qty - (possiblePos - possibleNeg)))

            for(i = 1; i <= iterations; i++) {
                currentResult = (qty - 1) + i

                probability = positiveMatrix[currentResult] * negativeMatrix[currentResult - qty]

                oddsMatrix.push(probability)
            }
            break;
        case 'f':
        case 't':
            qty = result[0]; //find net qty of 's/a' or 'f/t' rolled

            iterations = (possiblePos + 1) - (Math.max(0,qty - (possibleNeg - possiblePos)))

            for(i = 1; i <= iterations; i++) {
                currentResult = (qty - 1) + i

                probability = negativeMatrix[currentResult] * positiveMatrix[currentResult - qty]

                oddsMatrix.push(probability)
            }
            break;
        default:
            iterations = possiblePos + 1

            for(i = 1; i <= iterations; i++) {
                qty = 0

                currentResult = (qty - 1) + i

                probability = positiveMatrix[currentResult] * negativeMatrix[currentResult]

                oddsMatrix.push(probability)
            }
            break;
    }

    for(i = 0; i < oddsMatrix.length; i++)
        if(!oddsMatrix[i]) {
            oddsMatrix[i] = 0
        }

    let finalOdds = oddsMatrix.reduce((a,b) => a + b,0);

    return finalOdds
}

export default rollOdds