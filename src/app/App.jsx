import React from 'react';
import Header from './Header';
import RollResults from '../probability/RollResults';
import DiceResults from '../probability/DiceResults';
import DiceInput from '../probability/DiceInput';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diceResult: ['r', 'ss', 'sa', 'd', 'ff', 't', 'll'],
      rollResult: ['s', 'a', 'r', 'f', 't', 'd', 'l', 'n'],
      rolledDice: 'ygbrpkw',
      rollOdds: '',
      successOdds: ''
    }
  }

  render() {
    return(
      <div className="App">

        <Header style={this.state.style} headerClick={this.handleClick}/>
        <br />
        <DiceResults results={this.state.diceResult} dice={this.state.rolledDice}/>
        <RollResults results={this.state.rollResult} />
        <DiceInput />
        
      </div>
    );
  }
}

export default App;
