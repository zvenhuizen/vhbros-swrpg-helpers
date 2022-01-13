const cancelDicePoolResult = (dicePoolResultString) => {

    let sucfai = 0;
    let advthr = 0;
    let tri = 0;
    let des = 0;
    let lsp = 0;
    let dsp = 0;

    for(var i = 0; i < dicePoolResultString.length; i++) {
        
        const dicePoolResultArray = dicePoolResultString[i].split(''); //split the result into an array of single letters
        
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

    let outcomeArray = [];

    if(sucfai > 0) {
        outcomeArray.push([sucfai, 's']);
    }

    if(sucfai < 0) {
        outcomeArray.push([-1 * sucfai, 'f']);
    }

    if(advthr > 0) {
        outcomeArray.push([advthr, 'a']);
    }

    if(advthr < 0) {
        outcomeArray.push([-1 * advthr, 't']);
    }

    if(tri > 0) {
        outcomeArray.push([tri, 'r']);
    }

    if(des > 0) {
        outcomeArray.push([des, 'd']);
    }

    if(lsp > 0) {
        outcomeArray.push([lsp, 'l']);
    }

    if(dsp > 0) {
        outcomeArray.push([dsp, 'n']);
    }

    return outcomeArray;
}

export default cancelDicePoolResult;