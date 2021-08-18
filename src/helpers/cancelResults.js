const cancelResults = (roll) => {

    let suc = 0;
    let fai = 0;
    let adv = 0;
    let thr = 0;
    let tri = 0;
    let des = 0;
    let lsp = 0;
    let dsp = 0;
    const results = roll[1];

    for(var i = 0; i < results.length; i++) {
        
        const result = results[i].face.split(''); //split the result into an array of single letters

        // add all results together
        for(var j = 0; j < result.length; j++) {
            switch(result[j]) {
                case 's':
                    suc = suc + 1;
                    break;
                case 'a':
                    adv = adv + 1;
                    break;
                case 'r':
                    tri = tri + 1;
                    break;
                case 'f':
                    fai = fai + 1;
                    break;
                case 't':
                    thr = thr + 1;
                    break;
                case 'd':
                    des = des + 1;
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

    return {
        sucfai: (suc+tri) - (fai+des),
        advthr: adv - thr,
        tri: tri,
        des: des,
        lsp: lsp,
        dsp: dsp
    }
}

export default cancelResults;