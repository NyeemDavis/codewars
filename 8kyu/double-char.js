// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// PREP
// P: string
// R: string with each character repeated once
// E: 

doubleChar('bAcoN') // bbAAccooNN
doubleChar('maRio') // mmaaRRiioo
doubleChar('fortnite') // ffoorrttnniittee



 // My solution
function doubleChar(str) {
    //split the string into an array
    splitString = str.split('')
    // Map the array
    // Takes each letter in the array. Then concat each letter onto itself
    let newArr = splitString.map(letter => letter.concat(letter))
    // Return the newly joined array
    return newArr.join('')
}

doubleChar('NyEeM')