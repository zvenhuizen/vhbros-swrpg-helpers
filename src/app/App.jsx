import Header from './Header.js';
import React from 'react';
import DiceInput from '../probability/DiceInput'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        backgroundColor: '#232323'
      } 
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const red = Math.floor(Math.random() * 99);
    const green = Math.floor(Math.random() * 99);
    const blue = Math.floor(Math.random() * 99);
    this.setState({
      style: {
        backgroundColor: `#${red}${green}${blue}`
      }
    })
  }
  render() {
    return(
      <div className="App">

        <Header style={this.state.style} headerClick={this.handleClick}/>
        <br />
        <DiceInput />
        
      </div>
    );
  }
}

export default App;
