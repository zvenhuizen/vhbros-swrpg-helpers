import React, {useState} from 'react';

function GetData() {
    
    const getData = async (url) => {

        const [returnedData, setReturnedData] = useState(['wasssuuuuupppp']);

        const newData = await fetch(url, {
            method: 'GET', //getting the response from the backend
            headers: { //these help us tell the response how we are sending and accepting data
                'content-type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(res => res.json()); //putting the response in a json format
        console.log(newData);
        setReturnedData(newData.result) //since we are sending an object from the backen, need to target '.result'
    }

    return (
        <div className="App">
            <button onClick={() => getData('/quit')}>Click</button>
            {returnedData}
        </div>
    );
}

export default GetData;