import React from 'react';
import Header from './Header';
import RollResults from '../probability/RollResults';
import DiceResults from '../probability/DiceResults';
import DiceInput from '../probability/DiceInput';
import cancelResults from '../helpers/cancelResults';
import rollDice from '../helpers/rollDice';
import calculateProbability from '../helpers/calculateProbability';
import successOdds from '../probability/SuccessOdds';
import rollOdds from '../probability/rollOdds';
import {
  validLength
 } from '../helpers/validateInput'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diceInputValue: '',
      diceResult: [],
      rollResult: [],
      rolledDice: '',
      rollOdds: '--.--',
      successOdds: '--.--'
    }

    this.handleDiceInput = this.handleDiceInput.bind(this);
    this.handleRollClick = this.handleRollClick.bind(this);
  }

  handleDiceInput(event) {

    let sucPct = '--.--';

    if(event.target.value !== '') {
      sucPct = successOdds(calculateProbability(event.target.value));
      }

    this.setState({
      diceInputValue: event.target.value,
      diceResult: [],
      rollResult: [],
      rolledDice: '',
      rollOdds: '--.--',
      successOdds: sucPct
    });
  }

  handleRollClick(event) {
    // Validate length to ensure there is at least 1 die to roll
    let oddsPct = '--.--'

    if(validLength(event.target.value)) {
      const diceResult = rollDice(this.state.diceInputValue);
      const rollResult = cancelResults(diceResult);
      
      oddsPct = rollOdds(calculateProbability(this.state.diceInputValue),cancelResults(diceResult))
    
      this.setState({
        diceResult: diceResult,
        rollResult: rollResult,
        rolledDice: this.state.diceInputValue,
        rollOdds: oddsPct,
        diceInputValue: ''
      })
    }
  }

  render() {

    return(
      <div className="App">

        <Header style={this.state.style} />
        <DiceInput value={this.state.diceInputValue} diceInputChange={this.handleDiceInput} rollDiceClick={this.handleRollClick}/>
        
        <div className='results-container'>
          <DiceResults results={this.state.diceResult} rolledDice={this.state.rolledDice} dice={this.state.diceInputValue} successChance={this.state.successOdds} />
          <RollResults results={this.state.rollResult} rolledDice={this.state.rolledDice} oddsChance={this.state.rollOdds}/>
        </div>
      </div>
    );
  }
}

export default App;
