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
            case 's':
                return dice.success;
            case 'a':
                return dice.advantage;
            case 't':
                return dice.triumph;
            case 'f':
                return dice.failure;
            case 'o':
                return dice.threat;
            case 'd':
                return dice.despair;
            case 'l':
                return dice.lightpip;
            case 'n':
                return dice.darkpip;
            default:
                return null;
        }
    });

    return diceArray;

}

export default parseDice;