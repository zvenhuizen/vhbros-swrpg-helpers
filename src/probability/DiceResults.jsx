import Result from './Result';

const DiceResults = (props) => {

    const result = props.dice.split('').map((dice, index) => <Result resultType='dice' key={index} result={dice + props.results[index]}/>);

    return (
        <div className='dice-results' id='dice-results'>

            <div className='result'>{result}</div>

        </div>
    );
    
}

export default DiceResults;