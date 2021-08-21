import {dice} from './Dice';

const parseDice = (roll) => {

    console.log("Inside Parse Dice");

    let rollArray = roll.split(''); //split string into an array at every letter

    console.log("Roll =" + roll);

    console.log("Roll Array = " + rollArray);

    // create a new array with an object for each die rolled
    let diceArray = rollArray.map(die => {

        switch(die) {
            case 'y':
                console.log("Dice color is yellow");
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

    console.log(diceArray);
    return diceArray;

}

export default parseDice;