// I would move this file to the helpers directory
// I would rename this file to validateInput.js
// short reason being it better describes what the file does
// form errors sounds more like a list of errors


// for validateInput function, you could use a switch and just switch on one of two things
// first, and simplest (imo) is to use splice to get the last letter in a string > string.splice(-1)
// second, and still fairly simple is to get the value of the key that was pressed > event.keyCode
// ASCII has a list of all the keyCodes and you can just compare in the switch function
export function validInput(text) {
    const regex = RegExp(
        /[bgkprstvwy!-$]/gi
      );

    return !regex.test(text);
}

// this can be simplified if the min and max length are always the same, or if they have a default and you don't want to pass them in
// if you have a default, change the parameter to minLength=1 and maxLength=24
// then if all they pass is text, it will use those default values
// if it's always the same, eliminate the parameters min and max altogether
// I would rename this function to validateLength (or something similar)
// reason being it currently sounds like you're going to define a minMaxLength, rather than do a check against it.
// in general function names should be descriptive of a primary action being taken in the function
export function minMaxLength(text, minLength, maxLength) {

    // seems like this is what you're wanting to do:
    // let valid = false;
    // if (text.length >= minLength && text.length <= maxLength) valid = true;
    // return valid;
    let result = !text || text.length < minLength; // not sure what this line is checking. seems like I could break it if I passed false, null or undefined as the first parameter?
    if(maxLength)
        result = result || text.length < minLength;
    return result;
}