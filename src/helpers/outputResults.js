const outputResults = (results) => {

    console.log(results);
    let result = "<div class='result'>"
    if (results.sucfai > 0) {
        for(var s = 0; s < results.sucfai; s++) {
            result += "<img src=success.png height=24 />"
        }
    }
    else if (results.sucfai < 0) {
        for(var f = 0; f > results.sucfai; f--) {
            result += "<img src=failure.png height=24 />"
        }
    }

    if (results.advthr > 0) {
        for(var a = 0; a < results.advthr; a++) {
            result += "<img src=advantage.png height=24 />"
        }
    }
    else if (results.advthr < 0) {
        for(var t = 0; t > results.advthr; t--) {
            result += "<img src=threat.png height=24 />"
        }
    }

    for(var r = 0; r < results.tri; r++) {
        result += "<img src=triumph.png height=24 />"
    }

    for(var d = 0; d < results.des; d++) {
        result += "<img src=despair.png height=24 />"
    }

    for(var l = 0; l < results.lsp; l++) {
        result += "<img src=lightpip.png height=24 />"
    }

    for(var n = 0; n < results.dsp; n++) {
        result += "<img src=darkpip.png height=24 />"
    }

    result += "</div>"
    document.getElementById('roll-results').innerHTML= result;
}

export default outputResults;