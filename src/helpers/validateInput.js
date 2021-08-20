// Allowed keyCodecodes: 66 71 75 80 82 83 84 86 87 89 33 45 42 36

export function validInput(event) {// since you're currently not passing and event, but rather a string, consider changing event to text or string or something more accurately descriptive
    let valid = false
    console.log(event.keycode);
    switch (event.keyCode) {
        case event.keyCode === 33: // you should be able to remove the event.keyCode === part of this, and just say 33...
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

// I don't think you're done writing this yet, but if you are, I know why it isn't working...
export function validLength(text) {
    let valid = false;
    if (text.length >= 1 && text.length <= 24) 
    return valid;
}