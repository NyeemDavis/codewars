// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// duplicatedEncode ('din') // (((
// duplicatedEncode ('recede') // ()()()


const countLettersinString = (string) => {
    const obj = {};
    // Loops through string
    for(i = 0; i < string.length; i++) {
        // adds letter from string to character variable
        const ch = obj[i];
        if(!obj[ch]) {
            obj[ch] = 0;
        };
        obj[ch]++;
    }
    return obj
}

const duplicatedEncode = (word) => {
    console.log(word)
}

duplicatedEncode('penis')