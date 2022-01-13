import parseDicePool from './parseDicePool';

const rollDicePool = (dicePool) => {

    const diceObjectsArray = parseDicePool(dicePool); // get dice objects for roll
    
    // roll each die
    const faceResults = diceObjectsArray.map((die) => {

        const keys = Object.keys(die); //Get Keys (Sides of Dice)
        const face = Math.floor(Math.random() * keys.length) // Roll number from 0- # of Sides of Dice - 1
        const result = die[keys[face]] // Access result of roll for die

        return result.face;
    });
    
    return faceResults;

}

export default rollDicePool;