import Result from './Result';

const RollResults = (props) => {

    const results = props.results.map((result,index) => <Result key={index} resultType='symbol' result={result} />)
    return (
        <div className='roll-results' id='roll-results'>

            <div className='result'>{results}</div>

        </div>
    )
}

export default RollResults;
