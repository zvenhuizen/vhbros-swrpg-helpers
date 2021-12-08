export function validInput(string) {
    let valid = false
    switch (string.toLowerCase().slice(-1)) {
        case '':  // No Dice (Blank)
        case 'a': // Advantage
        case 'b': // Boost Dice (Blue)
        case 'd': // Despair
        case 'f': // Failure
        case 'g': // Ability Dice (Green)
        case 'k': // Setback Dice (Black)
        case 'l': // Light Side Pip
        case 'n': // Dark Side Pip
        case 'o': // Threat
        case 'p': // Difficulty Dice (Purple)
        case 'r': // Challenge Dice (Red)
        case 's': // Success
        case 't': // Triumph
        case 'w': // Force Dice (White)
        case 'y': // Proficiency Dice (Yellow)
          valid = true;
          break;
        default:
            valid = false
            break;
    }
    return valid;
}

export function validLength(string,min,max) {
    let valid = false;
    if (string.length >= min && string.length <= max) {
        valid = true;
    }
    return valid;
}