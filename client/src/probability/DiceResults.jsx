import Result from './Result';

const DiceResults = (props) => {

    let result = [];
    if (props.rolledDice.length > 0) {
        result = props.rolledDice.split('').map((dice, index) => <Result resultType='dice' key={index} result={dice + props.results[index]}/>);
    }
    else {
        result = props.dice.split('').map((dice, index) => <Result resultType='rollingDice' key={index} die={dice} />);
    }

    return (
        <div className='dice-results' id='dice-results'>

            <p className='result-header'>DICE <span className='successChance'>{props.successChance}% CHANCE OF SUCCESS</span></p>
            <div className='result'>{result}</div>

        </div>
    );
    
}

export default DiceResults;