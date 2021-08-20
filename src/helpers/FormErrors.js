export function validInput(text) {
    const regex = RegExp(
        /[bgkprstvwy!-$]/gi
      );

    return !regex.test(text);
}

export function minMaxLength(text, minLength, maxLength) {
    let result = !text || text.length < minLength;
    if(maxLength)
        result = result || text.length < minLength;
    return result;
}