// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// My solution 

const alphabetPosition = (text) => {
    let newText = []

    // Loop
    for(i = 0; i < text.length; i++) {
    
        if((charCode >= 65 && charCode <= 122) && text[i].match(/[a-z]/i)) {
            newText.push(charCode - 64)
        }
    }
    
    return newText
}

alphabetPosition("The sunset sets at twelve o' clock.")
alphabetPosition("@l_?[&@q")

// Better solution 

function alphabetPosition(text) {
    return text.toLowerCase()
            .split('')
            .filter(letter => letter.charCodeAt(0) < 123 && letter.charCodeAt(0) > 96)
            .map(letter => letter.charCodeAt(0) - 96)
            .join(" ")
}
