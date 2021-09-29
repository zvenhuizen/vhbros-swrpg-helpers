const rollOdds = (probMatrix, resultsMatrix) => {

    let oddsMatrix = [];
    let iterations, i, currentResult, probability, sucfai;
    let qty = 0;
    let result = resultsMatrix[0];
    
    if(result !== undefined) {
        sucfai = result[1]; //find whether the net roll was 's' or 'f'
    } else { 
        sucfai = ''
    }
    console.log(result)
    console.log(qty)
    console.log(sucfai)

    let successMatrix = probMatrix[0];
    console.log(successMatrix)

    let failureMatrix = probMatrix[1];
    console.log(failureMatrix)

    //calculate total possible successes and total possible failures
    let possibleSuc = successMatrix.length - 1
    let possibleFai = failureMatrix.length - 1
    console.log(possibleSuc)
    console.log(possibleFai)

    switch(sucfai) {
        case 's':
            //odds of netting 'qty' successes is equal to:
            //sum of((odds of each # of possible successes) * (odds of rolling # - n failures) )

            qty = result[0]; //find net qty of 's' or 'f' rolled

            iterations = (possibleFai + 1) - (Math.max(0,qty - (possibleSuc - possibleFai)))
            console.log(iterations)

            for(i = 1; i <= iterations; i++) {
                currentResult = (qty - 1) + i
                console.log(currentResult)

                probability = successMatrix[currentResult] * failureMatrix[currentResult - qty]
                console.log(probability)

                oddsMatrix.push(probability)
            }
            break;
        case 'f':
            qty = result[0]; //find net qty of 's' or 'f' rolled

            iterations = (possibleSuc + 1) - (Math.max(0,qty - (possibleFai - possibleSuc)))
            console.log(iterations)

            for(i = 1; i <= iterations; i++) {
                currentResult = (qty - 1) + i
                console.log(currentResult)

                probability = failureMatrix[currentResult] * successMatrix[currentResult - qty]
                console.log(probability)

                oddsMatrix.push(probability)
            }
            break;
        default:
            iterations = possibleSuc + 1

            for(i = 1; i <= iterations; i++) {
                qty = 0

                currentResult = (qty - 1) + i
                console.log(currentResult)

                probability = successMatrix[currentResult] * failureMatrix[currentResult]
                console.log(probability)

                oddsMatrix.push(probability)
            }
            break;
    }
    console.log(oddsMatrix)

    let finalOdds = oddsMatrix.reduce((result,number) => result + number,0);
    let oddsPct = (finalOdds * 100).toFixed(2);
    console.log(oddsPct)

    return oddsPct
}

export default rollOdds