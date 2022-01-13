import {
    createDiceMatrix,
    multiplyMatrices
} from "./probabilityFunctions";

const calculateSuccessProb = (dicePool) => {

    let successMatrices = createDiceMatrix(dicePool, 'success'); // Add All Positive Dice Odds to Matrix Array

    let failureMatrices = createDiceMatrix(dicePool, 'failure'); // Add All Negative Dice Odds to Matrix Array

    while (successMatrices.length > 1) {

        successMatrices.push(multiplyMatrices(successMatrices[0], successMatrices[1])); // Multiply the first two arrays together and add the result to the end of the matrix
        successMatrices.shift(); // remove the first array
        successMatrices.shift(); // remove the second array
    }

    while (failureMatrices.length > 1) {

        failureMatrices.push(multiplyMatrices(failureMatrices[0], failureMatrices[1])); // Multiply the first two arrays together and add the result to the end of the matrix
        failureMatrices.shift(); // remove the first array
        failureMatrices.shift(); // remove the second array
    }

    if(successMatrices.length < 1) {
        successMatrices = [1]
    }

    if(failureMatrices.length < 1) {
        failureMatrices = [1]
    }

    return {successProb: successMatrices[0], failureProb: failureMatrices[0]} // Return the only remaining array in matrices as the success/failure odds
}

export default calculateSuccessProb;