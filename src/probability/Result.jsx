const Result = (props) => {

    let image = null;
    if (props.type === 'symbol') {
        image = require('../assets/images/symbols/' + props.result + '.png').default;
    }

    return (
        <img className='symbol-result' src={image} alt='' height='16' />
    )
}

export default Result;