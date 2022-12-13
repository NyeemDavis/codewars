// This Kata is intended as a small challenge for my students

// All Star Code Challenge #18

// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

//PREP
// P: two strings, word, and letter, can be empty, second arg is always a length of 1
// R: num of instances, +
// E:  

strCount('Hello', 'o') // 1
strCount('Hello', 'l') // 2
strCount('', 'z') // 0

// My soultion

function strCount(str, letter) {
    // code here
    let instances = 0
    // check 2nd arg length
    if(letter.length > 1) {
        return false
    }
    let splitString = str.split('')
    // loop
    for(i = 0; i <= splitString.length; i++) {
        if(splitString[i] === letter) {
            instances += 1
        }
    }
    return instances
}

// Cleaner Solution

function strCount(str, letter) {
    // code here
    // check 2nd arg length
    if(letter.length > 1) {
        return false
    }
    return str.split('').filter(a => a==letter).length
}