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

    if(sucfai > 0) {
        results.push([sucfai, 's']);
    }

    if(sucfai < 0) {
        results.push([-1 * sucfai, 'f']);
    }

    if(advthr > 0) {
        results.push([advthr, 'a']);
    }

    if(advthr < 0) {
        results.push([-1 * advthr, 't']);
    }

    if(tri > 0) {
        results.push([tri, 'r']);
    }

    if(des > 0) {
        results.push([des, 'd']);
    }

    if(lsp > 0) {
        results.push([lsp, 'l']);
    }

    if(dsp > 0) {
        results.push([dsp, 'n']);
    }

    return results;
}

export default cancelResults;