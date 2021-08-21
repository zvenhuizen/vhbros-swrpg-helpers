import React from 'react';
import {
    validLength,
    validInput,
} from '../helpers/validateInput'

export default class DiceInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: []
        }

        this.validateInput = this.validateInput.bind(this);
    }

    validateInput(event) {
        let errors = [];
        let inputIsValid = true;

        if(!validInput(event.target.value)) {
            inputIsValid = false;
            // I changed this to show what character was typed...
            errors.push(`INVALID CHARACTER: '${event.target.value.toLowerCase().slice(-1)}' is not allowed`);
          }
        
        if(!validLength(event.target.value)) {
          inputIsValid = false;
          errors.push("Must have between 1 and 24 characters");
        }
        
        if(!inputIsValid) {
          this.setState({errors: errors});
        }
        else {
          this.props.diceInputChange(event);
        }

    }

    render() {
        return (
            <div>
                <legend>Dice combination:</legend>
                <input 
                  type="text"
                  onChange={(event) => this.validateInput(event)}
                  value={this.props.value}
                />
                <button className='btn btn-submit' onClick={this.props.rollDiceClick} >Roll</button>
                {this.state.errors.map(error => (<p>{error}</p>))}
            </div>
        )
    }
}