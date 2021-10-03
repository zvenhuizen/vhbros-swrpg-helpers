import React from 'react';
import Header from './Header';
import RollResults from '../probability/RollResults';
import DiceResults from '../probability/DiceResults';
import OddsResults from '../probability/OddsResults';
import DiceInput from '../probability/DiceInput';
import cancelResults from '../helpers/cancelResults';
import rollDice from '../helpers/rollDice';
import calculateSuccessProb from '../helpers/calculateSuccessProbability';
import successOdds from '../probability/SuccessOdds';
import rollOdds from '../probability/rollOdds';
import {validLength} from '../helpers/validateInput'
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
      successOdds: '--.--',
      errors: []
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
      errors: [],
      rolledDice: '',
      sucOdds: '--.--',
      advOdds: '--.--',
      rollOdds: '--.--',
      successOdds: sucPct
    });
  }

  handleRollClick(event) {
    // Validate length to ensure there is at least 1 die to roll
    let sucPct = '--.--';
    let advPct = '--.--';
    let oddsPct = '--.--';
    let errors = [];

    if(validLength(this.state.diceInputValue,1,24)) {
      const diceResult = rollDice(this.state.diceInputValue);
      const rollResult = cancelResults(diceResult);
      sucPct = (rollOdds(calculateSuccessProb(this.state.diceInputValue), cancelResults(diceResult), 'success')*100).toFixed(2);
      advPct = (rollOdds(calculateAdvantageProb(this.state.diceInputValue), cancelResults(diceResult), 'advantage')*100).toFixed(2);
      oddsPct = ((sucPct/100) * (advPct/100) * 100).toFixed(2);
    
      this.setState({
        diceResult: diceResult,
        rollResult: rollResult,
        rolledDice: this.state.diceInputValue,
        sucOdds: sucPct,
        advOdds: advPct,
        rollOdds: oddsPct,
        diceInputValue: ''
      })
    } else {
      if(!validLength(this.state.diceInputValue,1,24)) {
        errors.push("Cannot roll 0 dice");
      }
      this.setState({
        successOdds: '--.--',
        diceResult: [],
        rollResult: [],
        rolledDice: '',
        sucOdds: '--.--',
        advOdds: '--.--',
        rollOdds: '--.--',
        errors: errors
      })
    }
  }

  render() {

    return(
      <div className="App">

        <Header style={this.state.style} />
        <p className='input-errors'>{this.state.errors.map((error,index) => (<span key={index} className="alert alert-danger">{error}</span>))}</p>
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
