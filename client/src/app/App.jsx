import React, { useEffect } from 'react';
import Header from './Header';
import RollResults from '../probability/RollResults';
import DiceResults from '../probability/DiceResults';
import DiceInput from '../probability/DiceInput';
import cancelResults from '../helpers/cancelResults';
import rollDice from '../helpers/rollDice';
import calculateSuccessProb from '../helpers/calculateSuccessProbability';
import successOdds from '../probability/SuccessOdds';
import {validLength} from '../helpers/validateInput';
import dbOdds from '../helpers/dbProbability';
import { 
  fullProbability,
  rollProbabilities,
  permutations,
  combinations } from '../helpers/calculateFullProbability';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diceInputValue: '',
      diceResult: [],
      rollResult: [],
      rolledDice: '',
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
      rollOdds: '--.--',
      successOdds: sucPct
    });
  }

  handleRollClick(event) {
    // Validate length to ensure there is at least 1 die to roll
    let errors = [];
    let rollOdds = '';

    if(validLength(this.state.diceInputValue,1,24)) {
      const diceResult = rollDice(this.state.diceInputValue);
      const rollResult = cancelResults(diceResult);
      rollOdds = dbOdds(this.props)

      /*var suc = (this.state.diceInputValue.match(/s/g) || []).length;
      var adv = (this.state.diceInputValue.match(/a/g) || []).length;
      var tri = (this.state.diceInputValue.match(/t/g) || []).length;
      var fai = (this.state.diceInputValue.match(/f/g) || []).length;
      var thr = (this.state.diceInputValue.match(/o/g) || []).length;
      var des = (this.state.diceInputValue.match(/d/g) || []).length;
      var lsp = (this.state.diceInputValue.match(/l/g) || []).length;
      var dsp = (this.state.diceInputValue.match(/n/g) || []).length;

      let rollOdds = fullProbability(
        permutations(this.state.diceInputValue),
        rollProbabilities(combinations(this.state.diceInputValue,'positive')),
        rollProbabilities(combinations(this.state.diceInputValue,'negative')),
        diceResult,suc,adv,tri,fai,thr,des,lsp,dsp);*/
  
      this.setState({
        diceResult: diceResult,
        rollResult: rollResult,
        rolledDice: this.state.diceInputValue,
        rollOdds: rollOdds,
        diceInputValue: '',
      })
    } else {
      errors.push("Cannot roll 0 dice");
      
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
        <DiceInput value={this.state.diceInputValue} diceInputChange={this.handleDiceInput} rollDiceClick={this.handleRollClick} autofocus/>
        
        <div className='results-container'>
          <DiceResults results={this.state.diceResult} rolledDice={this.state.rolledDice} dice={this.state.diceInputValue} successChance={this.state.successOdds} />
          <RollResults results={this.state.rollResult} rolledDice={this.state.rolledDice} oddsChance={this.state.rollOdds}/>
        </div>
      </div>
    );
  }
}

export default App;
