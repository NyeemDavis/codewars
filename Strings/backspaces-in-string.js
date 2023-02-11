// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Solution
function cleanString(str) {
    let strArray = str.split('')
    let array = []
    strArray.forEach(letter => {
        letter != '#' ? array.push(letter) : array.pop()
    })
    return array.join('')
}


// Examples
cleanString('a#bc#d') // bd

