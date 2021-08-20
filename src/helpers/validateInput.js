// Allowed keyCodecodes: 66 71 75 80 82 83 84 86 87 89 33 45 42 36
export function validInput(event) {
    let valid = false
    console.log(event.keyCode);
    switch (event.keyCode) {
        case event.keyCode === 33:
        case event.keyCode === 36:
        case event.keyCode === 42:
        case event.keyCode === 45:
        case event.keyCode === 66:
        case event.keyCode === 71:
        case event.keyCode === 75:
        case event.keyCode === 80:
        case event.keyCode === 82:
        case event.keyCode === 83:
        case event.keyCode === 84:
        case event.keyCode === 86:
        case event.keyCode === 87:
        case event.keyCode === 89:
            valid = true;
            break;
        default:
            valid = false
            break;
    }
    return valid;
}

export function validLength(text) {
    let valid = false;
    if (text.length >= 1 && text.length <= 24) 
    return valid;
}