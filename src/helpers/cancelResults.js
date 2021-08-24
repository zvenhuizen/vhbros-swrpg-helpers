const cancelResults = (roll) => {

    let sucfai = 0;
    let advthr = 0;
    let tri = 0;
    let des = 0;
    let lsp = 0;
    let dsp = 0;

    for(var i = 0; i < roll.length; i++) {
        
        const result = roll[i].split(''); //split the result into an array of single letters

        // add all results together
        for(var j = 0; j < result.length; j++) {

            switch(result[j]) {
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

    let results = [];
    for(var sf = 0; sf < Math.abs(sucfai); sf++){
        if(sucfai > 0) {
            results.push('s');
        }

        if(sucfai < 0) {
            results.push('f');
        }
    }

    for(var at = 0; at < Math.abs(advthr); at++){
        if(advthr > 0) {
            results.push('a');
        }

        if(advthr < 0) {
            results.push('t');
        }
    }

    for(var r = 0; r < tri; r++) {
        results.push('r');
    }

    for(var d = 0; d < des; d++) {
        results.push('d');
    }

    for(var l = 0; l < lsp; l++) {
        results.push('l');
    }

    for(var n = 0; n < dsp; n++) {
        results.push('n');
    }

    return results;
}

export default cancelResults;