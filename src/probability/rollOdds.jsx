const rollOdds = (probMatrix, resultsMatrix, typeOf) => {
    console.log(typeOf)

    let oddsMatrix = [];
    let iterations, i, currentResult, probability, posneg;
    let qty = 0;
    let result = [];
    
    if(typeOf === 'success') {
        result = resultsMatrix[0];
    
        if(result !== undefined) {
            posneg = result[1]; //find whether the net roll was 's' or 'f'
        } else { 
            posneg = ''
        }
    }
    else if(typeOf === 'advantage') {
        result = resultsMatrix[1];
    
        if(result !== undefined) {
            posneg = result[1]; //find whether the net roll was 'a' or 't'
        } else { 
            posneg = ''
        }
    }
    console.log(result)
    console.log(posneg)

    let positiveMatrix = probMatrix[0];
    console.log(positiveMatrix)

    let negativeMatrix = probMatrix[1];
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

    let finalOdds = oddsMatrix.reduce((a,b) => a + b,0);

    return finalOdds
}

export default rollOdds