import {dice} from './Dice';

const parseDice = (roll) => {

    let rollArray = roll.split(''); //split string into an array at every letter

    // create a new array with an object for each die rolled
    let diceArray = rollArray.map(die => {

        switch(die) {
            case 'y':
                return dice.yellow;
            case 'g':
                return dice.green;
            case 'b':
                return dice.blue;
            case 'r':
                return dice.red;
            case 'p':
                return dice.purple;
            case 'k':
                return dice.black;
            case 'w':
                return dice.white;
            default:
                return null;
        }
    });

    return diceArray;

}

export default parseDice;