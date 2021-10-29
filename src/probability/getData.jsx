
export default function GetData(props) {
    
//Step 1: query the database for record of the positive and negative roll
    let returnedRoll = FetchData(props.positiveDice,props.negativeDice);

//Step 2: query the database for the index # of the rolled result for both positive and negative dice
    let returnedIndex = FetchResult(props.positiveRes,props.negativeRes);

//Step 3: take the data returned by each query and get 
  //1: the total combinations possible with the roll
  //2: the # of times it was possible to roll the result

  //1: combinations possible from the roll
    let posCombos;
    let negCombos;

    if(posCombos) {
        posCombos = returnedRoll[0].Combinations
    }
    if(negCombos) {
        negCombos = returnedRoll[1].Combinations
    }

    //get array of qty of times it is possible to roll each possible result
    let posResult;
    let negResult;
    let positiveArray = [];
    let negativeArray = [];

    if(posResult) {
        posResult = returnedRoll[0].Result
        positiveArray = posResult.split(',')
    }
    if(negResult) {
        negResult = returnedRoll[1].Result
        negativeArray = negResult.split(',')
    }
    
    //find index of the result in above array from Result table in db
    let posIndex;
    let negIndex;
    if(posIndex) {
        posIndex = returnedIndex[0].PrimaryKey
    }
    if(negIndex) {
        negIndex = returnedIndex[1].PrimaryKey
    }

  //2: # of times it was possible to roll the result
    let posRes = positiveArray[posIndex - 1]
    let negRes = negativeArray[negIndex - 1]

    //odds = #2/#1 --do this for both positive and negative dice rolled
    //odds of full result = multiply the odds of the positive result to the odds of the negative result
    let finalOdds = ((posRes / posCombos) * (negRes / negCombos) * 100).toFixed(2)

    return (
        <div className='successChance'>{finalOdds}% CHANCE OF RESULT</div>
    )
}

const FetchData = async (posRoll,negRoll) => {

    let returnedRoll = null;

    const newData = await fetch('/api/roll', {
        method: 'POST', //getting the response from the backend
        headers: {      //these help us tell the response how we are sending and accepting data
            'content-type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ 
            posRoll: posRoll, //pass in props from app to pass dice to sql statement on backend
            negRoll: negRoll
        })
    })
    .then(res => res.json()); //putting the response in a json format
    console.log(newData);
    returnedRoll = newData;
    return returnedRoll;
};

const FetchResult = async (posResult,negResult) => {

    let returnedIndex = null;

    const newData = await fetch('/api/result', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            posResult: posResult,
            negResult: negResult,
        })
    })
        .then(res => res.json()); //putting the response in a json format
    console.log(newData);
    returnedIndex = newData;
    return returnedIndex;
};