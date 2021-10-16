import {
    createDiceMatrix,
    multiplyMatrices
} from "./probabilityFunctions";

const calculateAdvantageProb = (dice) => {

    let advantageMatrices = createDiceMatrix(dice, 'advantage'); // Add All Positive Dice Odds to Matrix Array

    let threatMatrices = createDiceMatrix(dice, 'threat'); // Add All Negative Dice Odds to Matrix Array

    while (advantageMatrices.length > 1) {

        advantageMatrices.push(multiplyMatrices(advantageMatrices[0], advantageMatrices[1])); // Multiply the first two arrays together and add the result to the end of the matrix
        advantageMatrices.shift(); // remove the first array
        advantageMatrices.shift(); // remove the second array
    }

    while (threatMatrices.length > 1) {

        threatMatrices.push(multiplyMatrices(threatMatrices[0], threatMatrices[1])); // Multiply the first two arrays together and add the result to the end of the matrix
        threatMatrices.shift(); // remove the first array
        threatMatrices.shift(); // remove the second array
    }

    if(advantageMatrices.length < 1) {
        advantageMatrices = [1]
    }

    if(threatMatrices.length < 1) {
        threatMatrices = [1]
    }

    return [advantageMatrices[0], threatMatrices[0]]; // Return the only remaining array in matrices as the advantage/threat odds
}

export default calculateAdvantageProb;