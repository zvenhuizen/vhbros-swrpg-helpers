import React from 'react';
import Header from './Header';
import RollResults from '../probability/RollResults';
import DiceInput from '../probability/DiceInput';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diceResult: {dice: 'yygggbbbbppk', result: ['sa', 'sa', 'a', 'a', 'ss', 'sa', 'sa', 'sa', 'a', 'tf', 'f', '']},
      rollResult: ['s', 'a', 'r', 'f', 't', 'd', 'l', 'n'],
      rolledDice: 'yygggbbbbppk',
      rollOdds: '',
      successOdds: ''
    }
  }

  render() {
    return(
      <div className="App">

        <Header style={this.state.style} headerClick={this.handleClick}/>
        <br />
        <RollResults results={this.state.rollResult} />
        <DiceInput />
        
      </div>
    );
  }
}

export default App;
