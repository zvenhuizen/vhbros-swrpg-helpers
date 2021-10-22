
export default function getDiceSplit(dice,typeOf) {
    
    let diceArray = dice.split('')
    let result = [];
    let i;

    //iterate through yellow or red first in order to get ordering correct
    for (i = 0; i < diceArray.length; i++) {
        if(typeOf === 'positive') {
            if(diceArray[i] === 'y') {
                result.push(diceArray[i]);
            };
        } else if(typeOf === 'negative') {
            if(diceArray[i] === 'r') {
                result.push(diceArray[i]);
            };
        };
    };

    //iterate through green or purple next in order to get ordering correct
    for (i = 0; i < diceArray.length; i++) {
        if(typeOf === 'positive') {
            if(diceArray[i] === 'g') {
                result.push(diceArray[i]);
            };
        } else if(typeOf === 'negative') {
            if(diceArray[i] === 'p') {
                result.push(diceArray[i]);
            };
        };
    };

    //iterate through blue or black next in order to get ordering correct
    for (i = 0; i < diceArray.length; i++) {
        if(typeOf === 'positive') {
            if(diceArray[i] === 'b') {
                result.push(diceArray[i]);
            };
        } else if(typeOf === 'negative') {
            if(diceArray[i] === 'k') {
                result.push(diceArray[i]);
            };
        };
    };

    return result
};