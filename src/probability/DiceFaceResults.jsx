import Result from './Result';

const DiceFaceResults = (props) => {

    console.log("INSIDE DiceFaceResults");
    console.log("THESE ARE THE PROPERTIES");
    console.log(props);

    let result = [];
    if (props.dicePool.length > 0) {
        result = props.dicePool.split('').map((dice, index) => <Result resultType='dice' key={index} result={dice + props.diceFaceResults[index]}/>);
    }
    else {
        result = props.dice.split('').map((dice, index) => <Result resultType='rollingDice' key={index} die={dice} />);
    }

    return (
        <div className='dice-results' id='dice-results'>

            <p className='result-header'>DICE <span className='successProb'>{props.successProb}% PROBABILITY OF SUCCESS</span></p>
            <div className='result'>{result}</div>

        </div>
    );
    
}

export default DiceFaceResults;