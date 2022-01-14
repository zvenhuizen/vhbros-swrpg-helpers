const Result = (props) => {

    let image = null;

    console.log("PROPS IN RESULT");
    console.log(props);
    
    if (props.resultType === 'symbol') {
        image = require('../assets/images/symbols/' + props.result[1] + '.png').default;
    }
    else if(props.resultType ==='dice') {
        image = require('../assets/images/dice/' + props.result + '.png').default;
    }
    else if(props.resultType === 'rollingDice') {
        image = require('../assets/images/dice/' + props.die + '.gif').default;
    }

    return (
        <p className='result-data'>{props.resultType === 'symbol' && <span className='result-count'> {props.result[0]}</span>} <img className={`${props.resultType}-result`} src={image} alt='' /></p>
    )
}

export default Result;
