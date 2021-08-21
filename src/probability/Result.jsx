const Result = (props) => {

    let image = null;
    if (props.resultType === 'symbol') {
        image = require('../assets/images/symbols/' + props.result + '.png').default;
    }
    else if(props.resultType ==='dice') {
        image = require('../assets/images/dice/' + props.result + '.png').default;
    }

    return (
        <img className={`${props.resultType}-result`} src={image} alt='' />
    )
}

export default Result;