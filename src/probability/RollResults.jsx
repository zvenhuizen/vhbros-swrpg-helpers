import Result from './Result';

const RollResults = (props) => {

    const results = props.results.map((result,index) => <Result key={index} resultType='symbol' result={result} />)
    return (
        <div className='roll-results' id='roll-results'>

            <p className='result-header'>RESULTS </p>
            <div className='result'>{(props.rolledDice !== '' && results.length === 0) ? <span className='cancelled-result'>All Dice Have Cancelled</span> : results}</div>

        </div>
    )
}

export default RollResults;
