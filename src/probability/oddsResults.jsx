const OddsResults = (props) => {

    return (
        <div className='roll-results' id='roll-results'>

            <p className='result-header'>ODDS</p>
            <div className='odds'>{props.successChance}% Odds of that # of Success/Failure</div>
            <div className='odds'>{props.advantageChance}% Odds of that # of Advantage/Threat</div>
            <div className='odds'>{props.oddsChance}% Approximate odds of that roll</div>

        </div>
    )
}

export default OddsResults;
