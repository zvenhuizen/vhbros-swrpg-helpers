const cancelResults = (roll) => {

    let sucfai = 0;
    let advthr = 0;
    let tri = 0;
    let des = 0;
    let lsp = 0;
    let dsp = 0;
    let results = roll[1];

    for(var i = 0; i < results.length; i++) {
        
        const result = results[i].face.split(''); //split the result into an array of single letters

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

    results = [];
    for(var sf = 0; sf < Math.abs(sucfai); i++){
        if(sucfai > 0)
            results.push('s');
        if(sucfai < 0)
            results.push('f');
    }
    return results;
}

export default cancelResults;