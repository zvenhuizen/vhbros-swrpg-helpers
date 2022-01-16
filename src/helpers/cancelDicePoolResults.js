const cancelDicePoolResults = (diceFaceResultsArray) => {

    let sucfai = 0;
    let advthr = 0;
    let tri = 0;
    let des = 0;
    let lsp = 0;
    let dsp = 0;

    for(var i = 0; i < diceFaceResultsArray.length; i++) {
        
        const dicePoolResultArray = diceFaceResultsArray[i].split(''); //split the result into an array of single letters
        
        // add all results together
        for(var j = 0; j < dicePoolResultArray.length; j++) {

            switch(dicePoolResultArray[j]) {
                case 's':
                    sucfai = sucfai + 1;
                    break;
                case 'a':
                    advthr = advthr + 1;
                    break;
                case 'r':
                    tri = tri + 1;
                    sucfai = sucfai + 1;
                    break;
                case 'f':
                    sucfai = sucfai - 1;
                    break;
                case 't':
                    advthr = advthr - 1;
                    break;
                case 'd':
                    des = des + 1;
                    sucfai = sucfai - 1;
                    break;
                case 'n':
                    dsp = dsp + 1;
                    break;
                case 'l':
                    lsp = lsp + 1;
                    break;
                default:
                    return null;
            }
        }
        

    }

    let outcomeObject = {
        success: 0, failure: 0, 
        advantage: 0, threat: 0, 
        triumph: tri, despair: des,
        lsp: lsp, dsp: dsp
    };

    if(sucfai > 0) {
        outcomeObject.success = sucfai;
    }

    if(sucfai < 0) {
        outcomeObject.failure = sucfai * -1;
    }

    if(advthr > 0) {
        outcomeObject.advantage = advthr;
    }

    if(advthr < 0) {
        outcomeObject.threat = advthr * -1;
    }

    return outcomeObject;
}

export default cancelDicePoolResults;