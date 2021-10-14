import {permutations} from './permutations';

//sum same indexes of each array
export default function addArrays(myArray) {
    let finalArray = [];
    let permutationArray = [];
    console.log(myArray)

    if(undefined !== myArray && myArray.length) {

        for (var i = 0; i < myArray.length; i++) {
            
            let newArray = [];

            if (myArray[i].length > 1) {
                newArray = myArray[i].split('');
            } else {
                newArray.push(myArray[i].toString())
            };
            console.log(newArray)

            permutationArray = newArray.map(roll => {
                switch(roll) {
                    case '1':
                        return permutations.one;
                    case '2':
                        return permutations.two;
                    case '3':
                        return permutations.three;
                    case '4':
                        return permutations.four;
                    case '5':
                        return permutations.five;
                    case '6':
                        return permutations.six;
                    case '7':
                        return permutations.seven;
                    default:
                        return 0;
                }
            });
            console.log(permutationArray)

            //must do a recursive algo to add unlimited number of arrays
            let result = []

            if (permutationArray.length > 1) {
                result = permutationArray.reduce((r, a) => a.map((b, y) => (r[y] || 0) + b), [])
            } 
            else {
                result = permutationArray[0];
            }
            //What I want to do after each iteration is take the result and search for which element in the 
            //const netResult the array matches. Increment the matching index in a 374 element array by 1, 
            //and move to the next iteration.

            /* e.g. first iteration returns the array [0,0,0], which matches element 1: of netResult. I initialize
            a 374 element array before this for loop, and increment index[0] (the first element) of that array by
            1. so I now have a 374 element array with index[0] = 1 and all other indices = 0. */

            //All said and done I will have the qty of times every possible result could be rolled for each roll stored in a huge array.
            //I can then easily find the probability of a single result after rolling with a simple function.
            finalArray.push(result);
            console.log(finalArray)
        }
    }

    return finalArray;
}