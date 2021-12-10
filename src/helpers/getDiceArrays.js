import { diceCombos } from './Combos';

export default function DiceArrays(dice) {

  let posDice = dice.posDice.split('');
  let negDice = dice.negDice.split('');

  let posDiceArray = posDice.map(sides => {
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
  });

  let negDiceArray = negDice.map(sides => {
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
  });

  posDiceArray = posDiceArray.filter(e => e != null);
  negDiceArray = negDiceArray.filter(e => e != null);

  return {posDice: posDiceArray, negDice: negDiceArray};
}