import Header from './Header.js';
import React from 'react';
import DiceInput from '../probability/DiceInput';
import RollResults from '../probability/RollResults';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        backgroundColor: '#232323'
      } 
    }
  }

  render() {
    return(
      <div className="App">

        <Header style={this.state.style} headerClick={this.handleClick}/>
        <br />
        <RollResults />
        <DiceInput />
        
      </div>
    );
  }
}

export default App;
