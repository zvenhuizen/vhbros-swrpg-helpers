import React from 'react';
import {
    validLength,
    validInput,
} from '../helpers/validateInput'

class DiceInput extends React.Component {
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
            errors.push("Invalid characters")
        }
        else if(validLength(event.target.value)) {
            inputIsValid = false;
            errors.push("Max of 24 characters");
        }
        else {
            inputIsValid = true;
        }
        this.setState({errors});
        return inputIsValid;
    }

    render() {
        return (
            <div>
                <legend>Dice combination:</legend>
                <input type="text" onChange={(event) => this.validateInput(event)} />
                {this.state.errors.map((error, index) => (<p key={index}>{error}</p>))}
                <button className='btn btn-submit' onClick={this.props.rollDiceClick}>Roll</button>
            </div>
        )
    }
}

export default DiceInput;