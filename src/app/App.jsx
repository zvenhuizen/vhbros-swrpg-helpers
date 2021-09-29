import React from 'react';
import Header from './Header';
import RollResults from '../probability/rollResults';
import DiceResults from '../probability/diceResults';
import OddsResults from '../probability/oddsResults';
import DiceInput from '../probability/diceInput';
import cancelResults from '../helpers/cancelResults';
import rollDice from '../helpers/rollDice';
import calculateSuccessProb from '../helpers/calculateSuccessProbability';
import successOdds from '../probability/successOdds';
import rollOdds from '../probability/rollOdds';
import {
  validLength
 } from '../helpers/validateInput'
import calculateAdvantageProb from '../helpers/calculateAdvantageProbability';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diceInputValue: '',
      diceResult: [],
      rollResult: [],
      rolledDice: '',
      sucOdds: '--.--',
      advOdds: '--.--',
      rollOdds: '--.--',
      successOdds: '--.--'
    }

    this.handleDiceInput = this.handleDiceInput.bind(this);
    this.handleRollClick = this.handleRollClick.bind(this);
  }

  handleDiceInput(event) {

    let sucPct = '--.--';

    if(event.target.value !== '') {
      sucPct = successOdds(calculateSuccessProb(event.target.value));
      }

    this.setState({
      diceInputValue: event.target.value,
      diceResult: [],
      rollResult: [],
      rolledDice: '',
      sucOdds: '--.--',
      advOdds: '--.--',
      rollOdds: '--.--',
      successOdds: sucPct
    });
  }

  handleRollClick(event) {
    // Validate length to ensure there is at least 1 die to roll
    let sucPct = '--.--'
    let advPct = '--.--'
    let oddsPct = '--.--'

    if(validLength(event.target.value)) {
      const diceResult = rollDice(this.state.diceInputValue);
      const rollResult = cancelResults(diceResult);
      
      sucPct = rollOdds(calculateSuccessProb(this.state.diceInputValue), cancelResults(diceResult), 'success')
      advPct = rollOdds(calculateAdvantageProb(this.state.diceInputValue), cancelResults(diceResult), 'advantage')
      oddsPct = (sucPct * advPct * 100).toFixed(2)
    
      this.setState({
        diceResult: diceResult,
        rollResult: rollResult,
        rolledDice: this.state.diceInputValue,
        sucOdds: sucPct,
        advOdds: advPct,
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
          <RollResults results={this.state.rollResult} rolledDice={this.state.rolledDice}/>
          <OddsResults successChance={this.state.sucOdds} advantageChance={this.state.advOdds} oddsChance={this.state.rollOdds}/>
        </div>
      </div>
    );
  }
}

export default App;
