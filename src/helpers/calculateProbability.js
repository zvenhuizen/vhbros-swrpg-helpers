const calculateProbability = (dice) => {

    let successMatrices = createDiceMatrix(dice, 'success'); // Add All Positive Dice Odds to Matrix Array

    let failureMatrices = createDiceMatrix(dice, 'failure'); // Add All Negative Dice Odds to Matrix Array

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
    return [successMatrices[0], failureMatrices[0]]; // Return the only remaining array in matrices as the success/failure odds

}

function createDiceMatrix(dice, typeOf, forcePips='all') {

    let white = [0, 8/12, 4/12]; // set forceDice to all Pips

    if (forcePips !== 'all') {

        forcePips === 'lsp' ?
            white = [7/12, 2/12, 3/12] : // set forceDice to just ls pips
            forcePips === 'dsp' ? 
                white = [5/12, 6/12, 1/12] : // set forceDIce to just ds pips
                white = [0, 0, 0] // set forceDice to no pips
    }

    let diceWeights = {
        "b": [4/6,2/6,0], //blue
        "k": [4/6,2/6,0], //black
        "g": [4/8,3/8,1/8], //green
        "p": [5/8,2/8,1/8], //purple
        "y": [4/12,6/12,2/12], //yellow
        "r": [5/12,5/12,2/12], //red
        "w": white
    }

    let diceArray = dice.split(''); // split dice string into iteratable array

    let matrices = []

    for(var i = 0; i < diceArray.length; i++) {

        if (typeOf === 'success') {
            switch(diceArray[i]) {
                case 'y':
                case 'g':
                case 'b':
                case 'w':
                    matrices.push(diceWeights[diceArray[i]]) // add die success odds to matrix array
                    break;
                default:
                    break;
            }
        }
        else if(typeOf === 'failure') {
            switch(diceArray[i]) {
                case 'r':
                case 'p':
                case 'k':
                    matrices.push(diceWeights[diceArray[i]]) // add die failure odds to matrix array
                    break;
                default:
                    break;
            }
        }

    }

    return matrices // return matrix of success/failure odds for all rolled dice
}

function multiplyMatrices(m1, m2) {

    let multipliedMatrix = []; // set up a new matrix to hold the arrays of multiplied values

    for(var x = 0; x < m1.length; x++) {

        multipliedMatrix[x] = []; // create a new array to hold the next set of multiplied values

        for(var y = 0; y < m2.length; y++) {

            multipliedMatrix[x][x+y] = m1[x] * m2[y]; // iterate and multiply the arrays

        }
    }

    let addedMatrix = addMatrices(multipliedMatrix); // get the result of adding the newly multiplied arrays

    return addedMatrix[0]; // return a single new array of multiplied and added arrays
}

function addMatrices(m) {

    let nonEmpty = removeEmpty(m); // change empty places out for 0 to allow for addition

    let padded = padArrays(nonEmpty); // Make all arrays the same size by adding 0 to the shorter arrays up to maxArray length

    while(padded.length > 1) {

        let added = padded[0].map(function(x, index){ //here x = padded[index]

            return padded[1][index] + x; // add together the values at index of the first two arrays

        });
        
        padded.push(added); // Add the result of adding arrays 1 and 2 to the end of the padded matrix
        padded.shift(); // remove the first array that has already been added
        padded.shift(); // remove the second array that has already been added

    }

    return padded; // return the completely added matrix
    
}

function removeEmpty(m) {

    for(var i = 0; i < m.length; i++) {

        for(var j = 0; j < m[i].length; j++) {

            if(!m[i][j]) {

                m[i][j] = 0; // iterate through arrays finding falesy values and replace them with 0

            }
        }
    }

    return m; // return the same matrix, but with falsey values replaces

}

function padArrays(m) {
    
    let maxLength = m[0].length // set maxLength = to the length of the first array

    for(var l = 0; l < m.length; l++) {

        if(m[l].length > maxLength) {

            maxLength = m[l].length; // if the length of any array is longer than maxLength, update maxLength to that arrays length

        }
    }
    
    for(var i = 0; i < m.length; i++) {

        while (m[i].length < maxLength) {

            m[i].push(0); // push 0s onto the end of arrays as long as they are shorter than max length

        }

    }

    return m; // return the matrix with all arrays being the same length
}

export default calculateProbability;