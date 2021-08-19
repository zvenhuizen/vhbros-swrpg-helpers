import React , {Component} from 'react';
import {
    minMaxLength,
    validInput,
} from './FormErrors'

class DiceInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }

        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleRollClick = this.handleRollClick.bind(this);
    }

    handleUserInput = (e) => {
        const {name, value}= e.target;
        let currentFormErrors = this.state.currentFormErrors;

        switch (name) {
            case 'dice':
                if(minMaxLength(value, 1, 24)) {
                    currentFormErrors[name]=`There must be between 1 and 24 characters`;
                } else if(!value || validInput(value)) {
                    currentFormErrors[name]=`Text entered is invalid`;
                } else {
                    delete currentFormErrors[name];
                }
                break;
            default:
                break;
        }
    } //On each keystroke

    handleRollClick(event) {
        //The following needs to be changed to handle the roll event
        alert('A roll was submitted: ' + this.state.value); //On clicking 'roll' button, alert a roll has been made
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <legend>Dice combination:</legend>
                <input 
                  className={this.state.currentFormErrors && this.state.currentFormErrors.dice
                    ? 'form-control error'
                    : 'form-control'
                  }
                  type="text" 
                  noValidate 
                  onBlur={this.handleUserInput}
                />
                <button
                  className='btn btn-submit'
                  disabled={Object.entries(this.state.currentFormErrors || {}).length > 0}
                  onClick={this.handleRollClick}>
                    Roll
                </button>
                <ul>
                    {Object.entries(this.state.currentFormErrors || {}).map(([prop, value]) => {
                        return (
                            <li className='error-message' key={prop}>
                                {value}
                            </li>
                        );
                    })}
                </ul>
            </div>
        )
    }
}

export default DiceInput;