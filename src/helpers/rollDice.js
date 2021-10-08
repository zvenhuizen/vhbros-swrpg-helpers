import parseDice from './parseDice';

const rollDice = (dice) => {

    const diceArray = parseDice(dice); // get dice objects for roll
    
    // roll each die
    const results = diceArray.map((die) => {

        const keys = Object.keys(die); //Get Keys (Sides of Dice)
        const roll = Math.floor(Math.random() * keys.length) // Roll number from 0- # of Sides of Dice - 1
        const result = die[keys[roll]] // Access result of roll for die

        return result.face;
    })
    
    return results;

}

export default rollDice;