import { diceCombos } from './Combos';
import { rollCombos } from './Combos';
import { forceCombos } from './Combos';
import { netResults } from './netResults';

//split dice rolled into array, replace elements with their possible sides and combine
//e.g. roll = 'bb'. diceCombos.blue = [1,1,2,3,4,6]. The first few combinations will be:
//'11', '11', '12' etc until you have all possible combinations in an array.
export function combinations(dice,typeOf) {

    let myArray = dice.split(''); //split dice rolled into array

    //create a new array with elements being the arrays of each side
    let diceArray = myArray.map(sides => {
        
        if(typeOf === 'positive') {
            switch(sides) {
                case 'y':
                    return diceCombos.yellow;
                case 'g':
                    return diceCombos.green;
                case 'b':
                    return diceCombos.blue;
                default:
                    return null;
            }
        } else if (typeOf === 'negative') {
            switch(sides) {
                case 'r':
                    return diceCombos.red;
                case 'p':
                    return diceCombos.purple;
                case 'k':
                    return diceCombos.black;
                default:
                    return null;
            }
        } else {
            return null;
        }
    })

    diceArray = diceArray.filter(function (e) {
        return e != null;
    });

    let result = combine(diceArray);

    return result;
}

//recursive solution to find all possible combinations of any number of arrays
//called in combinations()
const combine = ([head, ...[headTail, ...tailTail]]) => {
    if (!headTail) return head
  
    const combined = headTail.reduce((acc, x) => {
      return acc.concat(head.map(h => `${h}${x}`))
    }, [])
  
    return combine([combined, ...tailTail])
}

export function getResultArrays(roll,suc,adv,tri,fai,thr,des,ls,ds) {

    let success = 0 - (suc + tri);
    let failure = 0 - (fai + des);
    let advantage = 0 - adv;
    let threat = 0 - thr;
    let triumph = 0 - tri;
    let despair = 0 - des;
    let lsp = 0 - ls;
    let dsp = 0 - ds;

    for(var i = 0; i < roll.length; i++) {
        
        const result = roll[i].split(''); //split the result into an array of single letters
        
        // add all results together
        for(var j = 0; j < result.length; j++) {

            switch(result[j]) {
                case 's':
                    success += 1;
                    break;
                case 'a':
                    advantage += 1;
                    break;
                case 'r':
                    triumph += 1;
                    success += 1;
                    break;
                case 'f':
                    failure += 1;
                    break;
                case 't':
                    threat += 1;
                    break;
                case 'd':
                    despair += 1;
                    failure += 1;
                    break;
                case 'n':
                    dsp += 1;
                    break;
                case 'l':
                    lsp += 1;
                    break;
                default:
                    return null;
            }
        }
    }

    let positiveArray = [success,advantage,triumph];
    let negativeArray = [failure,threat,despair];

    return [positiveArray, negativeArray, lsp, dsp];
};

export function fullProbability(perms,posProbs,negProbs,resultsArray) {
    
    let positiveArray = resultsArray[0];
    let negativeArray = resultsArray[1];
    let lsp = resultsArray[2];
    let dsp = resultsArray[3];
    let posResult = 1;
    let negResult = 1;
    console.log(positiveArray,negativeArray)

    for(var a = 0; a < netResults.length; a++) {

        if(posProbs.length > 0) {
            if(positiveArray.toString() === netResults[a].toString()) {
                posResult = posProbs[a];
            }
        }
        if(negProbs.length > 0) {
            if(negativeArray.toString() === netResults[a].toString()) {
                negResult = negProbs[a];
            }
        }
    }

    let forceArray = [lsp,dsp];
    let forceResult = 1;

    if(forceArray.toString() === forceCombos.one.result.toString()) {
        forceResult = forceCombos.one.qty;
    } else if(forceArray.toString() === forceCombos.two.result.toString()) {
        forceResult = forceCombos.two.qty;
    } else if(forceArray.toString() === forceCombos.three.result.toString()) {
        forceResult = forceCombos.three.qty;
    } else if(forceArray.toString() === forceCombos.four.result.toString()) {
        forceResult = forceCombos.four.qty;
    };
    console.log(posResult,negResult,forceResult)

    let positivePossibilities = perms[0];
    let negativePossibilities = perms[1];
    let forcePossibilities = perms[2];
    console.log(positivePossibilities,negativePossibilities,forcePossibilities)

    let finalProbability = (posResult / positivePossibilities) * (negResult / negativePossibilities) * (forceResult / forcePossibilities)

    return (finalProbability * 100).toFixed(2);
}

//get total # of possible combinations of positive dice, negative dice & force dice rolled
export function permutations(dice) {

    let diceArray = dice.split('');
    let posResult = 1;
    let negResult = 1;
    let forceResult = 1;

    for(var i = 0; i < diceArray.length; i++) {
        switch(diceArray[i]) {
            case 'y':
                posResult *= 12;
                break;
            case 'r':
                negResult *= 12;
                break;
            case 'g':
                posResult *= 8;
                break;
            case 'p':
                negResult *= 8;
                break;
            case 'b':
                posResult *= 6;
                break;
            case 'k':
                negResult *= 6;
                break;
            case 'w':
                forceResult *= 12;
                break;
            default:
                posResult *= 1;
                negResult *= 1;
                forceResult *= 1;
                break;
        }
    }

    return [posResult,negResult,forceResult]
}

//take the array from combinations() and get the qty of times an overall result can be rolled.
//called in fullProbability()
export function rollProbabilities(myArray) {
    let finalArray = [];
    let permutationArray = [];

    if(undefined !== myArray && myArray.length) {

        finalArray = Array(970).fill(0); //initialize 970 element array with 0s

        for (var i = 0; i < myArray.length; i++) {
            
            let newArray = [];

            if (myArray[i].length > 1) {
                newArray = myArray[i].split(''); //if rolling more than one dice, split current element in array
            } else {
                newArray.push(myArray[i].toString()) //if rolling once die, current element is the new array
            };

            //map elements in new array to whichever permutation it matches >> will return array of arrays
            permutationArray = newArray.map(roll => {
                switch(roll) {
                    case '1':
                        return rollCombos.one;
                    case '2':
                        return rollCombos.two;
                    case '3':
                        return rollCombos.three;
                    case '4':
                        return rollCombos.four;
                    case '5':
                        return rollCombos.five;
                    case '6':
                        return rollCombos.six;
                    case '7':
                        return rollCombos.seven;
                    default:
                        return 0;
                }
            });

            let result = []

            //add the same indices in each sub-array of permutationArray together
            //e.g. permutationArray = [ [0,2,0,] , [1,1,0] ] => [1,3,0]
            if (permutationArray.length > 1) {
                result = permutationArray.reduce((r, a) => a.map((b, y) => (r[y] || 0) + b), [])
            } 
            else {
                result = permutationArray[0]; //if only one element in permutationArray, then result is that element
            }

            // loop through netRoll to find which element in netRoll matches my result from above.
            //Increment the same index in finalArray as the index of netRoll that matches result.
            //e.g. result = [0,0,0], which matches netRoll[0]. Increment finalArray[0] by one (1)
            for(var answer = 0; answer < netResults.length; answer++) {

                if(result.toString() === netResults[answer].toString()) {
                    finalArray[answer] += 1;
                }
            }
        }
    }
    /*After all iterations, I am left with a finalArray of 970 elements. Each element will be the number of
    times it is possible to roll that element. */

    /* e.g. finalArray[0] = 2, which corresponds to netRoll[0] = [0,0,0]. It is possible to roll netRoll[0], 2 times.
    netRoll [0,0,0] means 0 success/failure, 0 advantage/threat, 0 triumph/despair */
    return finalArray;
}