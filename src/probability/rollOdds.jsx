const rollOdds = (probMatrix, resultsMatrix, typeOf) => {
    console.log(probMatrix)
    console.log(resultsMatrix)
    console.log(typeOf)

    let oddsMatrix = [];
    let iterations, i, currentResult, probability, posneg;
    let qty = 0;
    let resArray1 = resultsMatrix[0]
    let resValue = resArray1[1]
    let result = [];
    
    console.log(resValue)
    if(typeOf === 'success' && resValue !== 'a') {
        result = resultsMatrix[0];
    } else if(typeOf === 'advantage' && resValue !== 'a') {
        result = resultsMatrix[1];
    } else if(typeOf === 'success') {
        result = undefined;
    } else if(typeOf ==='advantage') {
        result = resultsMatrix[0];
    }
    
    if(result !== undefined) {
        posneg = result[1]; //find whether the net roll was 's' or 'f'
    } else { 
        posneg = ''
    }
    console.log(result)
    console.log(posneg)

    let positiveMatrix = []
    if(probMatrix[0] === 1) {
        positiveMatrix = [1];
    } else {
        positiveMatrix = probMatrix[0];
    }
    console.log(positiveMatrix)

    let negativeMatrix = [];
    if(probMatrix[1] === 1) {
        negativeMatrix = [1];
    } else {
        negativeMatrix = probMatrix[1];
    }
    console.log(negativeMatrix)

    //calculate total possible successes/advantage and total possible failures/threats
    let possiblePos = positiveMatrix.length - 1
    let possibleNeg = negativeMatrix.length - 1
    console.log(possiblePos)
    console.log(possibleNeg)

    switch(posneg) {
        case 's':
        case 'a':
            //odds of netting 'qty' successes is equal to:
            //sum of((odds of each # of possible successes/advantage) * (odds of rolling # - n failures/threats) )

            qty = result[0]; //find net qty of 's/a' or 'f/t' rolled

            iterations = (possibleNeg + 1) - (Math.max(0,qty - (possiblePos - possibleNeg)))
            console.log(iterations)

            for(i = 1; i <= iterations; i++) {
                currentResult = (qty - 1) + i
                console.log(currentResult)

                probability = positiveMatrix[currentResult] * negativeMatrix[currentResult - qty]
                console.log(probability)

                oddsMatrix.push(probability)
            }
            break;
        case 'f':
        case 't':
            qty = result[0]; //find net qty of 's/a' or 'f/t' rolled

            iterations = (possiblePos + 1) - (Math.max(0,qty - (possibleNeg - possiblePos)))
            console.log(iterations)

            for(i = 1; i <= iterations; i++) {
                currentResult = (qty - 1) + i
                console.log(currentResult)

                probability = negativeMatrix[currentResult] * positiveMatrix[currentResult - qty]
                console.log(probability)

                oddsMatrix.push(probability)
            }
            break;
        default:
            iterations = possiblePos + 1
            console.log(iterations)

            for(i = 1; i <= iterations; i++) {
                qty = 0

                currentResult = (qty - 1) + i
                console.log(currentResult)

                probability = positiveMatrix[currentResult] * negativeMatrix[currentResult]
                console.log(probability)

                oddsMatrix.push(probability)
            }
            break;
    }
    console.log(oddsMatrix)

    for(i = 0; i < oddsMatrix.length; i++)
        if(!oddsMatrix[i]) {
            oddsMatrix[i] = 0
        }

    let finalOdds = oddsMatrix.reduce((a,b) => a + b,0);

    return finalOdds
}

export default rollOdds