import {permCombos} from './permutations'

//split dice rolled into array, replace elements with their possible sidesand combine
const combinations = (roll) => {
    let myArray = roll.split(''); //split dice rolled into array
    
    //create a new array with elements being the arrays of each side
    let diceArray = myArray.map(sides => {
        
        switch(sides) {
            case 'y':
                return permCombos.yellow;
            case 'g':
                return permCombos.green;
            case 'b':
                return permCombos.blue;
            case 'r':
                return permCombos.red;
            case 'p':
                return permCombos.purple;
            case 'k':
                return permCombos.black;
            default:
                return null;
        }
    })

    let result = combine(diceArray);

    return result;
}

//recursive solution to find all possible combinations of any number of arrays
const combine = ([head, ...[headTail, ...tailTail]]) => {
    if (!headTail) return head
  
    const combined = headTail.reduce((acc, x) => {
      return acc.concat(head.map(h => `${h}${x}`))
    }, [])
  
    return combine([combined, ...tailTail])
}

export default combinations