
export function validInput(string) {
    let valid = false
    switch (string.toLowerCase().slice(-1)) {
        case 'y':
        case 'g':
        case 'r':
        case 'p':
        case 'b':
        case 'k':
        case 'w':
        case '':
          valid = true;
          break;
//        case 't':
//        case 's':
//        case 'v':
//        case '!':
//        case '$':
//        case '*':
//        case '-':
        default:
            valid = false
            break;
    }
    return valid;
}

export function validLength(string) {
    let valid = false;
    if (string.length >= 0 && string.length <= 24) {
        valid = true;
    }
    return valid;
}