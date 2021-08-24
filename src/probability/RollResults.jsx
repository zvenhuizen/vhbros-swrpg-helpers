import Result from './Result';

const RollResults = (props) => {

    const results = props.results.map((result,index) => <Result key={index} resultType='symbol' result={result} />)
    return (
        <div className='roll-results' id='roll-results'>

            <p className='result-header'>RESULTS</p>
            <div className='result'>{results.length > 0 ? results : "All Dice Have Cancelled."}</div>

        </div>
    )
}

export default RollResults;
